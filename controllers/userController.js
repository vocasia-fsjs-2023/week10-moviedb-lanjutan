const { user } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia";

class Controller {
  static addUser(req, res, next) {
    const { name, email, password } = req.body;
    user
      .create({
        name,
        email,
        password,
      })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  static async login(req, res, next) {
    const { email, password } = req.body;

    let users = await user.findOne({ where: { email } });

    const hash = users.password;
    const isValid = bcrypt.compareSync(password, hash);

    if (isValid) {
      const token = jwt.sign(
        {
          id: users.id,
          email: users.email,
          isAdmin: users.isAdmin,
        },
        secret
      );
      res.status(200).json(token);
    } else {
      next(new Error("Email/Password Salah"));
    }
  }
}

module.exports = Controller;
