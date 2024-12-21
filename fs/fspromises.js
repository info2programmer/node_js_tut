fs = require("fs");
const path = require("path");

// Get all file structures
// fs.promises
//   .readdir(__dirname)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fileName = "UpdatedPromisesText.txt";
const filePath = path.join(__dirname, fileName);

// fs.promises
//   .writeFile(filePath, "Hello this is a test data", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.promises
//   .appendFile(filePath, "\nHello this is a test data", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.promises
//   .rename(filePath, path.join(__dirname, "UpdatedPromisesTextRenamed.txt"))
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.promises
//   .unlink(path.join(__dirname, "UpdatedPromisesTextRenamed.txt"))
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
