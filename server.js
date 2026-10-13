import { createServer } from "node:http";
createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("NOMO public-git E2E ok: " + process.version + "\n");
}).listen(3000, "0.0.0.0", () => console.log("public e2e on 3000"));
