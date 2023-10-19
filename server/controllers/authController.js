const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/auth');

// User registration
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, secretKey, {
      expiresIn: '1h', // Adjust the expiration time as needed
    });

    res.status(201).json({ token, userId: newUser._id, email: newUser.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User registration failed' });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      expiresIn: '1h', // Adjust the expiration time as needed
    });

    res.status(200).json({ token, userId: user._id, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User login failed' });
  }
};

module.exports = { register, login };
