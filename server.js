import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./Routes/todoRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`This app is running on localhost port_no: ${port}`);
});
