const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.resolve(__dirname, "..");
const requestedDir = process.argv[2] || "src";
const port = Number(process.argv[3] || process.env.PORT || 5173);
const publicDir = path.resolve(root, requestedDir);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp"
};

function resolveRequestPath(url) {
  const cleanUrl = decodeURIComponent((url || "/").split("?")[0]);
  const relativePath = cleanUrl === "/" ? "index.html" : cleanUrl.slice(1);
  const absolutePath = path.resolve(publicDir, path.normalize(relativePath));

  if (absolutePath.indexOf(publicDir) !== 0) {
    return null;
  }

  return absolutePath;
}

const server = http.createServer((req, res) => {
  const requestPath = resolveRequestPath(req.url);

  if (!requestPath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  let filePath = requestPath;

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(publicDir, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream"
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log("Sigma.AI listo en http://localhost:" + port);
  console.log("Sirviendo carpeta " + requestedDir + "/");
});
