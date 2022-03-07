'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'artid@gmail.com',
      password:'123456',
      roleID: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
