'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('role', [{
      name: 'Admin',
       },{
      name: 'Teacher',
      }, {
        name:'Student',
      }, 
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  }
};
