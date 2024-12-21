const fs = require("fs");
const path = require("path");

const fileName = "AsyncAwait.txt";
const filePath = path.join(__dirname, fileName);

// Read Directory Structure

const readFilesWithAsyncAwait = async () => {
  try {
    const data = await fs.promises.readdir(__dirname);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFilesWithAsyncAwait();
