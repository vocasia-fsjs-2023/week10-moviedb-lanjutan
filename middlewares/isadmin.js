const { user } = require("../models");

async function isadmin(req, res, next) {
  const userId = req.userId;

  const admin = await user.findOne({ where: { id: userId } });
  if (admin.isadmin === true) {
    next();
  } else {
    next(new Error("KAMU BUKAN ADMIN"));
  }
}

module.exports = isadmin;
