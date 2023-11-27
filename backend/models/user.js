// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields as needed
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    // Check if the password is modified or is new
    if (!this.isModified('password')) {
      return next();
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(this.password, 10);

    // Set the hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;