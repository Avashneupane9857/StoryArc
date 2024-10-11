import express from "express";
import route from "./route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3001;
app.use(express.json());
app.use("/api/v1", route);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
