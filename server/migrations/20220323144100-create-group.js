'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('group', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'userID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      group: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      engine: 'MYISAM', // default: 'InnoDB'
      charset: 'latin1' // default: null
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('group');
  }
};