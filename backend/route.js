import express from "express";
import { signup } from "./controllers/signup.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    msg: "Healthy",
  });
});


route.post("/signup", signup);

export default route;
