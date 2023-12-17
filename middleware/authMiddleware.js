// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'User tidak terautentikasi' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret_key');
    const user = await User.findByPk(decodedToken.id);

    if (!user) {
      return res.status(401).json({ message: 'User tidak terautentikasi' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'User tidak terautentikasi' });
  }
};

exports.authorizeAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Akses hanya untuk user admin' });
  }
  next();
};
