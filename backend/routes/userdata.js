//routes/userdata.js

const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { username } = req.query;
    
    const user = await User.findOne({username});

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Extract user data
    const userData = {
      username: user.username,
      subscription: {
        status: user.subscription.status,
        lastBilledAt: user.subscription.lastBilledAt,
      },
    };
    // Return user data including email
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;