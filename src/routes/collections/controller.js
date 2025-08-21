const db = require('../../db');

// GET /api/collections
async function getCollections(req, res) {
  try {
    const result = await db.query('SELECT * FROM collections');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching collections:', err);
    res.status(500).json({ error: 'Failed to fetch collections' });
  }
}

// POST /api/collections
async function createCollection(req, res) {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await db.query(
      `INSERT INTO collections (name, description)
       VALUES ($1, $2)
       RETURNING *`,
      [name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating collection:', err);
    res.status(500).json({ error: 'Failed to create collection' });
  }
}

module.exports = {
  getCollections,
  createCollection
};