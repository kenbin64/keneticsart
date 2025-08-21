const db = require('../../db');

// GET /api/artwork
async function getArtworks(req, res) {
  try {
    const result = await db.query('SELECT * FROM artwork');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching artworks:', err);
    res.status(500).json({ error: 'Failed to fetch artworks' });
  }
}

// POST /api/artwork
async function createArtwork(req, res) {
  const { title, artist, image_url, collection_id } = req.body;

  if (!title || !artist || !image_url || !collection_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await db.query(
      `INSERT INTO artwork (title, artist, image_url, collection_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, artist, image_url, collection_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating artwork:', err);
    res.status(500).json({ error: 'Failed to create artwork' });
  }
}

module.exports = {
  getArtworks,
  createArtwork
};