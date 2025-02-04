import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFillePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFillePath, {
  encoding: "utf-8",
  highWaterMark: 16,
});

const writeableStream = createWriteStream(outputFilePath);

readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log("Buffer (chunk)", Buffer.from(chunk));
//   console.log("Received chunk", chunk);
//   writeableStream.write(chunk);
// });

// readableStream.on("end", () => {
//   console.log("File read complete");
//   writeableStream.end();
// });

// Handel errors
writeableStream.on("error", (err) => console.log("Error: ", err));
readableStream.on("error", (err) => console.log("Error: ", err));
