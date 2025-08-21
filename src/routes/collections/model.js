const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelize'); // Adjust path if needed

const Collection = sequelize.define('Collection', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'collections',
  timestamps: false // Set to true if you want createdAt/updatedAt
});

module.exports = Collection;