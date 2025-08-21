const express = require('express');
const router = express.Router();
const {
  getArtworks,
  createArtwork
} = require('./controller');

// GET /api/artwork
router.get('/', getArtworks);

// POST /api/artwork
router.post('/', createArtwork);

module.exports = router;