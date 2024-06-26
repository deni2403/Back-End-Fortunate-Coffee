'use strict';

const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const users = [
  "owner",
  "admin",
  "cashier"  
]

const passwords = [
  "owner123",
  "admin321",
  "cashier321"
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const encryptedPassword = passwords.map(password => bcrypt.hashSync(password, 10));

   const userAcc = users.map((user, index) => ({
    username: user,
    password: encryptedPassword[index],
    role: user.toUpperCase()
   }))

    await queryInterface.bulkInsert('user_acc', userAcc, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_acc', {
      username: {
        [Op.in]: users
      }
    }, {});
  }
};
