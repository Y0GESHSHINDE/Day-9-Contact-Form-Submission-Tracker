// routes/contact.js
const express = require('express');
const jwt = require('jsonwebtoken');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

// Middleware for admin authentication
const adminAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(403).json({ message: 'Access denied.' });

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized as admin.' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// POST /contact - Submit a contact message
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting message' });
  }
});

// GET /admin/messages - Get all messages (Admin route)
router.get('/admin/messages', adminAuth, async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages' });
  }
});

module.exports = router;
