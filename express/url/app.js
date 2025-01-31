import express from "express";
import { PORT } from "./env.js";
import { shrortenRoutes } from "./routes/shorten.routes.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
app.use(shrortenRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}`);
});
