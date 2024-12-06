// controllers/authController.js

const loginUser = (req, res) => {
  // Login logic
  res.send('Login successful');
};

const verifyToken = (req, res) => {
  // Token verification logic
  res.send('Token is valid');
};

module.exports = { loginUser, verifyToken };
