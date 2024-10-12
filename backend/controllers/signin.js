import prisma from "../prisma.js";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  const secret = process.env.JWT_SECRET;
  const { email, password } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: { email, password },
    });
    if (!userExists) {
      return res.status(500).json({
        msg: " User doesnot exists Please login",
      });
    }
    const token = jwt.sign(password, secret);

    res.status(200).json({ msg: "Login successful", token });
  } catch (e) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};
