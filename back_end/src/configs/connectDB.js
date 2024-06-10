import sequelize from 'sequelize';

const sequelizeConnect = new sequelize('', 'username', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
});

module.exports = {
    sequelizeConnect,
};
