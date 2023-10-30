const jwt = require("jsonwebtoken");
const secret = "rahasia";

async function authentication(req, res, next) {
  try {
    const header = req.headers;
    const bearer = header.authorization;
    const token = bearer.slice(7);
    const decoded = jwt.verify(token, secret);

    req.userId = decoded.id;
    req.email = decoded.email;
    req.admin = decoded.isadmin;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
