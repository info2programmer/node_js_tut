const fs = require("fs");
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
const readFilesWithAsyncAwait = async () => {
  try {
    const data = await fs.promises.readdir(__dirname);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFilesWithAsyncAwait();
