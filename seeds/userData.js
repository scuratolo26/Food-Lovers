const { User } = require('../models');

const userData = [
    {
        username: 'user123',
        email: 'user123@email.com',
        password: 'user123Password'
    },
    {
        username: 'sam123',
        email: 'sam123@email.com',
        password: 'sam123Password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;