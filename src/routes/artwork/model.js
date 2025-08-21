const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelize'); // Adjust path if needed

const Artwork = sequelize.define('Artwork', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  collection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'collections',
      key: 'id'
    }
  }
}, {
  tableName: 'artwork',
  timestamps: false // Set to true if you want createdAt/updatedAt
});

module.exports = Artwork;