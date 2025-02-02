import { z } from "zod";
import path from "path";
import * as crypto from "crypto";
import { readFile, writeFile } from "fs/promises";

const urlSchema = z.coerce.string().url();
const shortCodeSchema = z.coerce.string().min(3).max(10);
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

const PostData = async (req, res) => {
  try {
    let finalShortCode = "";
    const { url, shortCode } = req.body;

    const urldata = urlSchema.safeParse(url);
    if (!urldata.success)
      return res.status(400).send(urldata.issues[0].message);
    // console.log(urldata);

    const shortCodeData = shortCodeSchema.safeParse(shortCode);
    if (!shortCodeData.success)
      finalShortCode = await crypto.randomBytes(4).toString("hex");
    else finalShortCode = shortCodeData.data;

    // console.log(url, shortCode);
    const loadData = await jsonFile();
    if (loadData[finalShortCode])
      return res.status(400).send("Short code already exists");

    loadData[finalShortCode] = urldata.data;
    // console.log(loadData);
    await writeFile(
      path.resolve("data", "data.json"),
      JSON.stringify(loadData)
    );
  } catch (error) {
    console.log(error);
  } finally {
    return res.redirect("/");
  }
};

export { PostData, jsonFile };
