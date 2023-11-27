// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://teddy164:Bjtqz5XfkiNGM3rS@cluster1.ahsoqmh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = db;