import { createServer } from "http";
import { createReadStream, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

const server = createServer((req, res) => {
    if (req.url === "/") {
    const htmlPath = join(__dirname, "index.html");
        createReadStream(htmlPath).pipe(res);
        return;
    }
if (req.url === "/video") {
    const videoPath = join(__dirname, "Content", "videos", "myvideo.mp4");

    const stat = statSync(videoPath);
    const fileSize = stat.size;

    const range = req.headers.range;

    if (!range) {
        res.writeHead(400);
        res.end("Range header is required");
        return;
    }

    const CHUNK_SIZE = 10 ** 2; // 1 MB

    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE - 1, fileSize - 1);

    const contentLength = end - start + 1;

    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    });

    createReadStream(videoPath, {
        start,
        end,
       }).pipe(res);  
}
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});