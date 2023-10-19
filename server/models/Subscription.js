// models/Subscription.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  planId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  billingInterval: {
    type: DataTypes.ENUM('monthly', 'yearly'), // You can adjust this as needed
    allowNull: false,
  },
  // Add more fields as needed (e.g., subscription start date, status, etc.)
});

module.exports = Subscription;
