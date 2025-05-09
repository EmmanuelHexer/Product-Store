import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server ready");
});

app.listen(5000, () => {
  connectDb();
  console.log(`server start at http://localhost:5000`);
});
