import express from "express";
import { signup } from "./controllers/signup.js";
import { signin } from "./controllers/signin.js";
import { BlogPost } from "./controllers/BlogPost.js";
import { getBlogById, getBlogs } from "./controllers/getBlogs.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    msg: "Healthy",
  });
});

route.post("/signup", signup);
route.post("/signin", signin);
route.post("/blogpost", BlogPost);
route.get("/blogs", getBlogs);
route.get("/blogs/:id", getBlogById);

export default route;
