const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const baseNae = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log({
  parseData,
  resolvedPath,
  extname,
  baseNae,
  dirName,
});
