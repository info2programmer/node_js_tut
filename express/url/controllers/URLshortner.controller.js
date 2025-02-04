import { z } from "zod";
import path from "path";
import * as crypto from "crypto";
import { writeFile } from "fs/promises";
import { jsonFile } from "../models/URL.model.js";

const urlSchema = z.coerce.string().url();
const shortCodeSchema = z.coerce.string().min(3).max(10);

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

const getData = async (req, res) => {
  // const data = await readFile(path.join("views", "index.html"));
  const links = await jsonFile();

  return res.render("index", { links, host: req });
};

const getLinkData = async (req, res) => {
  try {
    const key = req.params.shortCode;
    const loadData = await jsonFile();
    const redirectUrl = loadData[key];
    return res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
  }
};

export { PostData, getData, getLinkData };
