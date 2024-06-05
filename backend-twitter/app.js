
// app.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

