import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

// app.use(express.static("public"));

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "public", "404.html"));
});

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

app.get("/product", (req, res) => {
  console.log(req.query);
  return res.send(
    `<h1>User search for ${req.query.search} and limit will be ${req.query.limit}</h1>`
  );
});

app.get("/about", (req, res) => {
  return res.send("<h1>Hello About Page!</h1>");
});

app.get("/contact", (req, res) => {
  const conatctPage = path.join(import.meta.dirname, "public", "contact.html");
  return res.sendFile(conatctPage);
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  return res.send(`Ok`);
});

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}`);
});
