'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      head: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      chapterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Chapters',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
