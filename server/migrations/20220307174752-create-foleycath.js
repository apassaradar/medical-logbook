'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('foleycaths', {
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
       hn: {
        type: Sequelize.INTEGER
      },
      patient_name: {
        type: Sequelize.STRING
      },
      diagnosis: {
        type: Sequelize.STRING
      },
        wardID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ward',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
       unitID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'unit',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('foleycaths');
  }
};