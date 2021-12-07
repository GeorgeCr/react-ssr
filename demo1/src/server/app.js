import express from "express";
import ssr from "./helpers/ssr";

const app = express();
app.use(express.static("public"));

app.get("/health", (_req, res) => {
  res.send("OK");
});

app.get("*", (req, res) => {
  ssr(req, res);
});

export default app;
