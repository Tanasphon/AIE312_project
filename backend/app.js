// app.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes'); // Import the routes

console.log('authRoutes:', authRoutes); // Debugging: Check the router object

// Use JSON middleware
app.use(express.json());

// Use your routes
app.use('/api/auth', authRoutes); // Mount the routes to '/api/auth'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
