const sequelizeConn = require('../config/db.config').sequelizeConn
const Sequelize = sequelizeConn.Sequelize

const Client = sequelizeConn.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

module.exports = Client