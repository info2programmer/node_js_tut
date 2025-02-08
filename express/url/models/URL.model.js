// import { readFile, writeFile } from "fs/promises";
// import path from "path";

// /**
//  * Reads data from the file `data/data.json` and returns it as an object.
//  * If the file doesn't exist, it is created with an empty object as its
//  * content. If any other error occurs, it is thrown.
//  *
//  * @returns {object} The data from the file, or an empty object if the file
//  * doesn't exist.
//  */
// const jsonFile = async () => {
//   try {
//     const filePath = path.resolve("data", "data.json");
//     const data = await readFile(filePath, "utf-8");
//     return JSON.parse(data || JSON.stringify({}));
//     // res.writeHead(200, { "Content-Type": "application/json" });
//     // res.end(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       writeFile(path.resolve("data", "data.json"), JSON.stringify({}));
//       return JSON.parse(JSON.stringify({}));
//     }
//     throw error;
//   }
// };

// export { jsonFile };

import { dbClient } from "../config/db_client.js";
import { env } from "../config/env.js";

const db = dbClient.db(env.MONGODB_DATABASE);
const shorternCollection = db.collection("shorteners");

export const jsonFile = async () => {
  return shorternCollection.find().toArray();
};

export const saveLink = async (link) => {
  return shorternCollection.insertOne(link);
};

export const getLinkByShortCode = async (shortCode) => {
  return shorternCollection.find({ shortCode: shortCode });
};
