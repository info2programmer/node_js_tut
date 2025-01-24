import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

// app.use(express.static("public"));

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  const greetPageFile = path.join(import.meta.dirname, "public", "index.html");
  return res.sendFile(greetPageFile);
});

app.get("/profile/:username", (req, res) => {
  // const greetPageFile = path.join(import.meta.dirname, "public", "index.html");
  // return res.sendFile(greetPageFile);
  console.log(req.params);
  return res.send(`<h1>Hello ${req.params.username}</h1>`);
});

app.get("/profile/:username/artical/:slug", (req, res) => {
  // const greetPageFile = path.join(import.meta.dirname, "public", "index.html");
  // return res.sendFile(greetPageFile);
  console.log(req.params);
  return res.send(
    `<h1>Artical for ${req.params.slug.replace(/-/g, " ")} by ${
      req.params.username
    }</h1>`
  );
});

app.get("/about", (req, res) => {
  return res.send("<h1>Hello About Page!</h1>");
});

app.get("/contact", (req, res) => {
  return res.send(` <form id="urlShortenerForm">
        <label for="url">Enter URL:</label><br />
        <input
          type="text"
          id="url"
          name="url"
          placeholder="Enter the URL"
          required
        /><br />
        <label for="customData">Custom Path (optional):</label><br />
        <input
          type="text"
          id="customData"
          name="customData"
          placeholder="Enter custom path"
        /><br />
        <button type="submit">Shorten URL</button>
      </form>`);
});

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}`);
});
