const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
  name: 'Humberto',
  email: 'humberto@email.com',
  password: '123456'
});

module.exports = factory;
