'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'Admin',
        lastName: '',
        email: 'anna.tatinyan.21@mail.ru',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: bcrypt.hashSync(process.env.ADMIN_PW, 8)
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
}
