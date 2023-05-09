const Provider = require('./Provider')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Purchase = sequelizeConn.define('purchases', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    // provider_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Provider,
    //         key: 'id'
    //     }
    // }
});

Purchase.belongsTo(Provider)
Provider.hasMany(Purchase)

module.exports = Purchase