'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('course', [{
       id:'1',
       name: 'patients',
    }, {
        id:'2',
      name: 'opd',
       }, {
          id:'3',
        name:'conferance',
       }, {
          id:'4',
         name:'emergency',
       }, {
          id:'5',
         name:'conferance',
       }, {
          id:'6',
         name:'observemajor',
       }, {
          id:'7',
         name:'helpmajor',
       }, {
          id:'8',
         name:'helpobserveminor',
       }, {
          id:'9',
         name:'firstaid',
       }, {
          id:'10',
         name:'stitches',
       }, {
          id:'11',
         name:'foleycath',
       }, {
          id:'12',
         name:'cvp',
       }, {
          id:'13',
         name:'resident',
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('course', null, {});
  }
};