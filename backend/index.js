const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/employeeDataManagement';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/employeeDetails', employeeRoutes);

// Start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
