import jwt from "jsonwebtoken";
import prisma from "../prisma.js";

export const signup = async (req, res) => {
  const secret = process.env.JWT_SECRET;
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    const token = jwt.sign(user.password, secret);

    return res
      .status(200)
      .json(
        { msg: `token is produced and user added to database ${token}` },
        { token: token }
      );
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal server error" });
  }
};
