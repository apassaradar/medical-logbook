'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('course', [{
      name: 'patients',
    },{
      name: 'opd',
      }, {
        name:'conferance',
      }, {
         name:'emergency',
      }, {
         name:'conferance',
      }, {
         name:'observemajor',
      }, {
         name:'helpmajor',
      }, {
         name:'helpobserveminor',
      }, {
         name:'firstaid',
      },{
         name:'stitches',
      },{
         name:'foleycath',
      }, {
         name:'cvp',
      },{
         name:'resident',
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('course', null, {});
  }
};