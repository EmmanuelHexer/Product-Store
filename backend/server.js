import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.send("Server ready");
});

app.listen(5000, () => {
  console.log(`server start at http://localhost:5000`);
});
