// utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.

const fs = require("fs");
const path = require("path");

const fileName = "asyncText.txt";
const filePath = path.join(__dirname, fileName);

// *-------------------------------------------------------------------------------------*

//*-------------------------------------------------------------------------------------*
//* fs.writeFile(): Writes data to a file, replacing the file if it already exists.
//! syntax: fs.writeFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.
//*-------------------------------------------------------------------------------------*

// fs.writeFile(filePath, "Hello this is a test data", "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("File written successfully");
// });

//*-------------------------------------------------------------------------------------*
//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).
//*-------------------------------------------------------------------------------------*

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

//*-------------------------------------------------------------------------------------*
//* fs.appendFile(): Appends data to a file. If the file doesn’t exist, it is created.
//! syntax: fs.appendFile(path, data, options, callback);

//*-------------------------------------------------------------------------------------*

// fs.appendFile(filePath, "\nHello this is a test data", "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("File appended successfully");
// });

//*-------------------------------------------------------------------------------------*
//* fs.unlink(): Deletes a file asynchronously.
//! syntax: fs.unlink(path, callback);

//*-------------------------------------------------------------------------------------*

// fs.unlink(filePath, (err) => {
//   if (err) console.log(errr);
//   else console.error("file deleted");
// });

const newFileName = "UpdatedasyncText.txt";
const newFilePath = path.join(__dirname, newFileName);

fs.rename(filePath, newFilePath, (err) => {
  if (err) console.error(err);
  else console.log("File renamed");
});
