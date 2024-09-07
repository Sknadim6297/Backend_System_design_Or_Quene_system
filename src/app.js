const express = require('express');
const authController = require('./controllers/authController');
const queueController = require('./controllers/queneController');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Routes
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/enqueue', authMiddleware, queueController.enqueueRequest);

module.exports = app;
