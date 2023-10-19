// models/Plan.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plan = sequelize.define('Plan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), // Adjust the precision and scale as needed
    allowNull: false,
  },
  // Add more fields as needed (e.g., description, features, etc.)
});

module.exports = Plan;
