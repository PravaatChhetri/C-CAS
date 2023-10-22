const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI; // Use an environment variable for MongoDB URI
console.log( process.env.MONGODB_URI);

// Middleware
app.use(express.json()); // Use express.json() instead of body-parser
app.use(cors());

// Routes (create routes as needed)
app.get('/', (req, res) => {
  res.send('Hello, MERN with Vite!');
});

mongoose.set('strictQuery', false);

// MongoDB Connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    // You might want to handle the error here, e.g., by shutting down the server
  });
