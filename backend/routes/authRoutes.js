// routes/authRoutes.js
const express = require('express');
const { loginUser, verifyToken } = require('../controllers/authController');
const router = express.Router();  // Define the router

// Define routes
router.post('/login', loginUser);
router.get('/verify', verifyToken);

// Export the router (correct export)
module.exports = router;
