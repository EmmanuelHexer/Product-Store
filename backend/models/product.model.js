import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // this will make sure that it has createdAt and updatedAt fields on each document.
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
