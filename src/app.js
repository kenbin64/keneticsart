const express = require('express');
const app = express();

// Import routers
const collectionsRouter = require('./routes/collections');
const artworkRouter = require('./routes/artwork');

// Middleware
app.use(express.json());

// Route mounting
app.use('/api/collections', collectionsRouter);
app.use('/api/artwork', artworkRouter);

module.exports = app;