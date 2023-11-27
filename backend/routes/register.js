// routes/register.js
const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user'); // Adjust the path based on your project structure

const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input (add more validation as needed)

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;