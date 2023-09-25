const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const User = require('../Models/User');

router.post('/login', authMiddleware.validateLogin, async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Validate the password
    if (!user.validatePassword(password)) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Generate and send a JWT token upon successful login
    const token = authMiddleware.generateToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/register', authMiddleware.validateRegistration, (req, res) => {
    // Create a new user
    const newUser = new User({ username: req.body.username, password: req.body.password });
    newUser.save()
      .then(() => res.sendStatus(201))
      .catch(err => res.status(400).json({ error: err.message }));
  });
  
  // Implement logout if needed
  
  module.exports = router;