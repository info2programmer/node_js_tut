import { Router } from "express";
import {
  PostData,
  getData,
  getLinkData,
} from "../controllers/URLshortner.controller.js";

const router = Router();

router.get("/", getData);

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

router.get("/link/:shortCode", getLinkData);

export const shrortenRoutes = router;
