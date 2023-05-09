const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Warehouse = sequelizeConn.define('warehouses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(250),
        allowNull: true
    }
});

module.exports = Warehouse