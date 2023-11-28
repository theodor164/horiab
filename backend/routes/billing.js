// routes/billing.js
const express = require('express');
const cron = require('node-cron');
const User = require('../models/user');

const router = express.Router();

// Schedule the billing job to run every hour
cron.schedule('0 * * * *', async () => {
  try {
    const usersToBill = await User.find({ 'subscription.status': true });

    usersToBill.forEach(async (user) => {
      // Your billing logic here...
      // Update lastBilledAt timestamp, calculate charges, etc.
      user.subscription.lastBilledAt = new Date();
      await user.save();
    });

    console.log('Billing job completed successfully');
  } catch (error) {
    console.error('Billing job error:', error);
  }
});

module.exports = router;