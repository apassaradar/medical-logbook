'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('units', [{
      name: 'unit 1',
       },{
      name: 'unit 2',
      }, {
        name:'unit 3',
      }, {
         name:'unit 4',
      }, {
         name:'unit 5',
      },
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('units', null, {});
  }
};
