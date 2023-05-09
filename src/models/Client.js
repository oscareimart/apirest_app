// const Sale = require('./Sale');

const sequelizePaginate = require('sequelize-paginate')
const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Client = sequelizeConn.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    document: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

sequelizePaginate.paginate(Client)
// Client.hasMany(Sale)

module.exports = Client