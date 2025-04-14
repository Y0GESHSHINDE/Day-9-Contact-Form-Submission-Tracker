// server.js
const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/contact_form', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB', err));

// Routes
app.use(contactRoutes);

// Server listening
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

