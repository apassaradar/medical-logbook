'use strict';
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const hash =await bcrypt.hash('123456',10)
    return queryInterface.bulkInsert('users', [{
       id:'1',
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'artid@gmail.com',
      password:hash,
      roleID: '1',
      createdAt: date,
      updatedAt: date,
    }, {
        id:'2',
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'game@gmail.com',
      password:hash,
      roleID: '2',
      createdAt: date,
      updatedAt: date,
      }, {
      id:'3',
      fname: 'Artid',
      lname: 'Sudjoi',
      email: 'dar@gmail.com',
      password:hash,
      roleID: '3',
      createdAt: date,
      updatedAt: date,
      
    },
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
