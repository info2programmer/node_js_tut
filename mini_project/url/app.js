import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import { stat } from "fs";

const PORT = 3000;

const serverFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
};

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

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      serverFile(res, path.resolve("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      serverFile(res, path.resolve("public", "style.css"), "text/css");
    } else if (req.url === "/url-list") {
      const loadData = await jsonFile();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: true, data: loadData }));
    } else {
      const key = req.url.slice(1);
      // console.log(url);
      const loadData = await jsonFile();
      const redirectUrl = loadData[key];
      // console.log(redirectUrl);
      if (redirectUrl) {
        res.writeHead(302, { location: redirectUrl });
        res.end();
        return;
      }

      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: true, data: `URL not found` }));
    }
  } else if (req.method === "POST" && req.url === "/shorten") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      // console.log(body);
      const { url, custom_data } = JSON.parse(body);

      // Field Validation Code Start
      if (!url) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: false, msg: "Missing url field" }));
        return;
      }
      // Field Validation Code End

      const loadData = await jsonFile();

      const finalShortCode =
        custom_data || crypto.randomBytes(4).toString("hex");
      // console.log(Object.values(loadData).indexOf(url));
      if (Object.hasOwn(loadData, finalShortCode)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: false, msg: "Key already exists" }));
        return;
      } else if (!Object.values(loadData).indexOf(url)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: false, msg: "URL already exists" }));
        return;
      }

      loadData[finalShortCode] = url;

      await writeFile(
        path.resolve("data", "data.json"),
        JSON.stringify(loadData)
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: true, msg: "Data added successfully" }));

      // const filePath = path.resolve("public", "data.json");
      // await readFile(filePath, "utf-8", (err, data) => {

      // });
    });
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: true, msg: "Methord Not Allowed" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
