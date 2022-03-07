'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('wards', [{
      name: 'ward 1',
       },{
      name: 'ward 2',
      }, {
        name:'ward 3',
      }, {
         name:'ward 4',
      }, {
         name:'ward 5',
      },
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wards', null, {});
  }
};
