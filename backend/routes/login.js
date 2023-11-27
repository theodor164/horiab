// routes/login.js
const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input (add more validation as needed)

    // Find the user by username
    const user = await User.findOne({ username });

    // If the user doesn't exist or the password is incorrect, return an error
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If the username and password are correct, you can generate a token or set a session here
    // For simplicity, let's just send a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;