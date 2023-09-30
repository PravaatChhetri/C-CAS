const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection (You'll need to replace 'YOUR_MONGODB_URI' with your actual MongoDB URI)
mongoose.connect('YOUR_MONGODB_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Routes (create routes as needed)
app.get('/', (req, res) => {
  res.send('Hello, MERN with Vite!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
