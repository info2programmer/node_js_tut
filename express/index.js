import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.send("<h1>Hello World!</h1>");
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
