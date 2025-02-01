import express from "express";
import { PORT } from "./env.js";
import { shrortenRoutes } from "./routes/shorten.routes.js";
import path from "path";
import { studentRoutes } from "./routes/student.routes.js";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
app.use(shrortenRoutes, studentRoutes);
app.set("view engine", "ejs");
// app.set("views")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}`);
});
