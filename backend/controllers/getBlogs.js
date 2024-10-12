import prisma from "../prisma.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();

    if (!blogs) {
      return res.status(404).json({
        message: "no blogs foundd",
      });
    }
    console.log(blogs);

    return res.status(200).json({
      blogs: blogs,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const getBlogById = async (req, res) => {
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: +req.params.id,
      },
    });

    if (!blog) {
      return res.status(404).json({
        message: "this blog not found",
      });
    }

    return res.status(200).json({
      blog: blog,
    });
  } catch (error) {}
  return res.status(400).json({
    message: error,
  });
};
