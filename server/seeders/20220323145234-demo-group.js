"use strict";

module.exports = {

  

  async up(queryInterface, Sequelize) {
    
    const date = new Date();
    await queryInterface.bulkInsert(
      "group",
      [
        {
          userID: 12,
          group: 1,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 12,
          group: 2,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 2,
          group: 4,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 2,
          group: 3,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 13,
          group: 1,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 3,
          group: 2,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 4,
          group: 3,
          createdAt: date,
          updatedAt: date
        },
        {
          userID: 5,
          group: 4,
          createdAt: date,
          updatedAt: date
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("group", null, {});
  },
};
