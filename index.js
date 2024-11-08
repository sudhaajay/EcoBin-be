const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // Import auth routes
const connectDB = require('./DB/connection'); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the function from connection.js
connectDB();

// Test route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from EcoBin backend!' });
});

// Authentication routes
app.use('/api/auth', authRoutes);  // Add auth routes under /api/auth path

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
