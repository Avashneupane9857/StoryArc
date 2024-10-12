import prisma from "../prisma.js";

export const BlogPost = async (req, res) => {
  const { title, overview, description } = req.body;
  const token = req.headers.token;
  if (!token) {
    return res.json({
      msg: "No auth token",
    });
  }
  const postBlog = await prisma.blog.create({
    data: {
      title,
      overview,
      description,
    },
  });
  res.status(200).json({
    msg: "You posted Blog successfully",
    postBlog,
  });
};
