const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Unity = sequelizeConn.define('unities', {
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
    },
    quantity: {
        type: Sequelize.INTEGER,
        default: 0
    },
    // unity_id: {
    //     type: Sequelize.INTEGER,
    // references: {
    //     model: Unity,
    //     id: 'id'
    // }
    // }
});

// Unity.belongsTo(Unity)
// Unity.hasMany(Unity)

module.exports = Unity