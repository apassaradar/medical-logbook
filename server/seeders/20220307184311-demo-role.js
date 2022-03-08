'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('roles', [{
      name: 'Admin',
       },{
      name: 'Teacher',
      }, {
        name:'Student',
      }, 
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
