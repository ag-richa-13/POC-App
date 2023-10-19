'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Subscriptions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      planId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      billingInterval: {
        type: Sequelize.ENUM('monthly', 'yearly'),
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM('active', 'cancelled', 'paused', 'expired'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subscriptions');
  },
};
