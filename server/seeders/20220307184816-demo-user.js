'use strict';
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const hash =await bcrypt.hash('123456',10)
    return queryInterface.bulkInsert('users', [{
       userID:'1',
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'artid@gmail.com',
      password:hash,
      roleID: '1'
      
    }, {
        userID:'12',
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'game@gmail.com',
      password:hash,
      roleID: '2'
      }, {
      userID:'13',
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'dar@gmail.com',
      password:hash,
      roleID: '3',
  
      
    },
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};