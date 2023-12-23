const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Registration failed', details: err.message });
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Wrong Password' });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ error: 'Login failed', details: err.message });
    }
  },
};
