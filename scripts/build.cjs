const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");
const dist = path.join(root, "dist");

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

fs.rmSync(dist, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 });
copyDir(src, dist);

console.log("Build listo en dist/");
