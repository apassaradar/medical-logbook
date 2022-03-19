'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('unit', [{
       id:'1',
      name: 'unit 1',
    }, {
          id:'2',
      name: 'unit 2',
      }, {
         id:'3',
        name:'unit 3',
      }, {
         id:'4',
         name:'unit 4',
      }, {
         id:'5',
         name:'unit 5',
      },
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('unit', null, {});
  }
};
