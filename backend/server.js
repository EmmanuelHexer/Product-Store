import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log(`server start at http://localhost:5000`);
});
