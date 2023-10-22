const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token)
    return res.status(401).json({ message: "user tidak terauthentikasi" });

  token = token.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "user tidak terauthentikasi" });

  console.log(token);

  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, user) => {
    if (err)
      return res.status(401).json({ message: "user tidak terauthentikasi" });
    req.user = user;
    next();
  });
};

module.exports = auth;
