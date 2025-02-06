import { readFile, writeFile } from "fs/promises";
import path from "path";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://info2programmer:c7pFTikmeekyrA9t@cluster0.l5kk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
/**
 * Reads data from the file `data/data.json` and returns it as an object.
 * If the file doesn't exist, it is created with an empty object as its
 * content. If any other error occurs, it is thrown.
 *
 * @returns {object} The data from the file, or an empty object if the file
 * doesn't exist.
 */
const jsonFile = async () => {
  try {
    const filePath = path.resolve("data", "data.json");
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data || JSON.stringify({}));
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      writeFile(path.resolve("data", "data.json"), JSON.stringify({}));
      return JSON.parse(JSON.stringify({}));
    }
    throw error;
  }
};

export { jsonFile };
