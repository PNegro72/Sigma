const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");
const dist = path.join(root, "dist");

function removeDir(target) {
  if (!fs.existsSync(target)) {
    return;
  }

  fs.readdirSync(target).forEach((entry) => {
    const fullPath = path.join(target, entry);
    const stats = fs.lstatSync(fullPath);

    if (stats.isDirectory()) {
      removeDir(fullPath);
      return;
    }

    fs.unlinkSync(fullPath);
  });

  fs.rmdirSync(target);
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach((entry) => {
    const source = path.join(from, entry);
    const target = path.join(to, entry);
    const stats = fs.lstatSync(source);

    if (stats.isDirectory()) {
      copyDir(source, target);
      return;
    }

    fs.copyFileSync(source, target);
  });
}

removeDir(dist);
copyDir(src, dist);

console.log("Build listo en dist/");
