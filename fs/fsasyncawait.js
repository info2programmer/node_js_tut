const fs = require("fs/promises");
const path = require("path");

const fileName = "AsyncAwait.txt";
const filePath = path.join(__dirname, fileName);

// Read Directory Structure

/**
 * Reads the current directory structure using fs.promises.readdir() and
 * console.log's the result. If an error occurs, it is logged to the console.
 *
 * @returns {undefined}
 */
// const readFilesWithAsyncAwait = async () => {
//   try {
//     const data = await fs.promises.readdir(__dirname);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// readFilesWithAsyncAwait();

//*-------------------------------------------------------------------------------------*/
//* fs.promises.writeFile(): Writes data to a file, replacing the file if it already exists.
//! syntax: fs.promises.writeFile(path, data, options);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//*-------------------------------------------------------------------------------------*/

/**
 * Writes a file using fs.promises.writeFile() and console.log's the result. If an
 * error occurs, it is logged to the console.
 *
 * @returns {undefined}
 */
// const writeFilesWithAsyncAwait = async () => {
//   try {
//     await fs.writeFile(filePath, "Hello this is a test data", "utf-8");
//     console.log("File written successfully");
//   } catch (err) {
//     console.log(err);
//   }
// };

// writeFilesWithAsyncAwait();

//*-------------------------------------------------------------------------------------*/
// * fs.promises.appendFile(): Appends data to a file. If the file doesn’t exist, it is created.
//! syntax: fs.promises.appendFile(path, data, options);

//? path: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//*-------------------------------------------------------------------------------------*/

/**
 * Appends data to a file using fs.promises.appendFile() and console.log's the
 * result. If an error occurs, it is logged to the console.
 *
 * @returns {undefined}
 */
// const appendFilesWithAsyncAwait = async () => {
//   try {
//     await fs.appendFile(filePath, "\nHello this is a test data", "utf-8");
//     console.log("File appended successfully");
//   } catch (err) {
//     console.log(err);
//   }
// };

// appendFilesWithAsyncAwait();

//*-------------------------------------------------------------------------------------*/
//* fs.promises.rename(): Renames a file asynchronously.
//! syntax: fs.promises.rename(oldPath, newPath);

//? oldPath: The path of the file to rename.
//? newPath: The new path for the file.
//*-------------------------------------------------------------------------------------*/

/**
 * Renames a file using fs.promises.rename() and console.log's the result. If an
 * error occurs, it is logged to the console.
 *
 * @returns {undefined}
 */
// const renameFilesWithAsyncAwait = async () => {
//   try {
//     const newFileName = "updatedTest.txt";
//     const newFilePath = path.join(__dirname, newFileName);
//     await fs.rename(filePath, newFilePath);
//     console.log("File renamed successfully");
//   } catch (err) {
//     console.log(err);
//   }
// };

// renameFilesWithAsyncAwait();

// *-------------------------------------------------------------------------------------*/
// * fs.promises.unlink(): Deletes a file asynchronously.
//! syntax: fs.promises.unlink(path);

//? path: The path of the file to delete.
//*-------------------------------------------------------------------------------------*/

/**
 * Deletes a file using fs.promises.unlink() and console.log's the result. If an
 * error occurs, it is logged to the console.
 *
 * @returns {undefined}
 */
const unlikeFileUsingAsyncAwait = async () => {
  try {
    const newFileName = "updatedTest.txt";
    const newFilePath = path.join(__dirname, newFileName);
    await fs.unlink(newFilePath);
    console.log("File deleted successfully");
  } catch (err) {
    console.log(err);
  }
};

unlikeFileUsingAsyncAwait();
