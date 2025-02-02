import { readFile, writeFile } from "fs/promises";
import path from "path";
import { Router } from "express";
import { PostData, jsonFile } from "../controllers/URLshortner.controller.js";

const router = Router();

/**
 * Reads data from the file `data/data.json` and returns it as an object.
 * If the file doesn't exist, it is created with an empty object as its
 * content. If any other error occurs, it is thrown.
 *
 * @returns {object} The data from the file, or an empty object if the file
 * doesn't exist.
 */
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

router.get("/", async (req, res) => {
  const data = await readFile(path.join("views", "index.html"));
  const links = await jsonFile();

  return res.send(
    data.toString().replace(
      "{{links}}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/link/${shortCode}">${shortCode}</a></li>`
        )
        .join("")
    )
  );
});

router.get("/short", async (req, res) => {
  return res.redirect("/");
});

router.post("/short", PostData);

// router.post("/short", async (req, res) => {
//   try {
//     let finalShortCode = "";
//     const { url, shortCode } = req.body;

//     const urldata = urlSchema.safeParse(url);
//     if (!urldata.success)
//       return res.status(400).send(urldata.issues[0].message);
//     // console.log(urldata);

//     const shortCodeData = shortCodeSchema.safeParse(shortCode);
//     if (!shortCodeData.success)
//       finalShortCode = await crypto.randomBytes(4).toString("hex");
//     else finalShortCode = shortCodeData.data;

//     // console.log(url, shortCode);
//     const loadData = await jsonFile();
//     if (loadData[finalShortCode])
//       return res.status(400).send("Short code already exists");

//     loadData[finalShortCode] = urldata.data;
//     // console.log(loadData);
//     await writeFile(
//       path.resolve("data", "data.json"),
//       JSON.stringify(loadData)
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     return res.redirect("/");
//   }
// });

router.get("/link/:shortCode", async (req, res) => {
  try {
    const key = req.params.shortCode;
    const loadData = await jsonFile();
    const redirectUrl = loadData[key];
    return res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
  }
});

// export default router;
export const shrortenRoutes = router;
//  default shrortenRoutes;
