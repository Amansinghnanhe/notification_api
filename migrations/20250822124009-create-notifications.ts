'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notifications', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      process: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      event: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      code: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      user_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      notification_type: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      action: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      detail_page_link: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      archive_policy: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      is_read: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notifications');
  }
};
