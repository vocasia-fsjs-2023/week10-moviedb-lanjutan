const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const register = async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    try {
      if (err) return res.status(500).json({ message: err.message });
      const user = await User.create({ name, email, password: hash });

      return res.status(201).json({
        message: "akun berhasil dibuat, silahkan login.",
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      if (!result) return res.status(401).json({ message: "Unauthorized" });

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || "secret",
        {
          expiresIn: 60 * 60,
        }
      );

      return res.status(200).json({ token });
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
