const express = require('express');
const router = express.Router();
const {
  getCollections,
  createCollection
} = require('./controller');

// GET /api/collections
router.get('/', getCollections);

// POST /api/collections
router.post('/', createCollection);

module.exports = router;