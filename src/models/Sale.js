const Client = require('./Client')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Sale = sequelizeConn.define('sales', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
    // client_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Client,
    //         key: 'id'
    //     }
    // }
});

Sale.belongsTo(Client, { as: 'client' })
Client.hasMany(Sale, { as: 'sales' })

module.exports = Sale