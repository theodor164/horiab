// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Adjust the path based on your project structure
const registerRoute = require('./routes/register'); // Adjust the path based on your project structure
const loginRoute = require('./routes/login'); // Import the new login route
const userDataRoute = require('./routes/userdata');

const app = express();
const PORT = 3001;

app.use(cors()); // Use the cors middleware to handle CORS
app.use(bodyParser.json());
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute); // Use the new login route
app.use('/api/userdata', userDataRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});