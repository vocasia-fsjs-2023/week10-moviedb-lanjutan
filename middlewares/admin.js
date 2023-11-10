const { User } = require("../models");

const isAdmin = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  if (user.isAdmin !== true)
    return res.status(401).json({
      message: "akses hanya untuk user admin",
    });

  next();
};

module.exports = isAdmin;
