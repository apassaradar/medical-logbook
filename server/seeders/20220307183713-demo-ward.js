'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ward', [{
      id:'1',
      name: 'ward 1',
    }, {
          id:'2',
      name: 'ward 2',
      }, {
         id:'3',
        name:'ward 3',
      }, {
         id:'4',
         name:'ward 4',
      }, {
         id:'5',
         name:'ward 5',
      },
  
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ward', null, {});
  }
};
