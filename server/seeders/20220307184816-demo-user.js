"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const hash = await bcrypt.hash("123456", 10);
    return queryInterface.bulkInsert("users", [
      {
        userID: "1",
        fname: "Artid",
        lname: "Sudjoi",
        email: "artid@gmail.com",
        password: hash,
        roleID: "1",
        createdAt: date,
        updatedAt: date
      },
      {
        userID: "12",
        fname: "Atichat",
        lname: "Chantha",
        email: "game@gmail.com",
        password: hash,
        roleID: "2",
        createdAt: date,
        updatedAt: date
      },
      {
        userID: "2",
        fname: "John",
        lname: "Doe",
        email: "john@gmail.com",
        password: hash,
        roleID: "2",
        createdAt: date,
        updatedAt: date
      },
      {
        userID: "13",
        fname: "Apassara",
        lname: "Rueangmueang",
        email: "dar@gmail.com",
        password: hash,
        roleID: "3",
        createdAt: date,
        updatedAt: date
      },
      {
        userID: "3",
        fname: "Jane",
        lname: "Smith",
        email: "jane@gmail.com",
        password: hash,
        roleID: "3",
        createdAt: date,
        updatedAt: date
      },
      {
        userID: "4",
        fname: "Ruby",
        lname: "Jane",
        email: "ruby@gmail.com",
        password: hash,
        roleID: "2",
        createdAt: date,
        updatedAt: date
      },
      {
        userID: "5",
        fname: "Maddy",
        lname: "Smith",
        email: "maddy@gmail.com",
        password: hash,
        roleID: "2",
        createdAt: date,
        updatedAt: date
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
