'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('role', [{
      id:'1',
      name: 'Admin',
    }, {
          id:'2',
      name: 'Teacher',
      }, {
         id:'3',
        name:'Student',
      }, 
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  }
};
