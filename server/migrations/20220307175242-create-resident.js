'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('residents', {
    dataID: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       courseID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'courses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
     },
      subject: {
        type: Sequelize.STRING
      },
      
        userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
        status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    
    },
      {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1' // default: null
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('residents');
  }
};