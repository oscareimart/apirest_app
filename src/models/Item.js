const Unity = require('./Unity')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Item = sequelizeConn.define('items', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stock: {
        type: Sequelize.INTEGER,
        default: 0
    },
    // unity_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Unity,
    //         key: 'id'
    //     }
    // }
});

Item.belongsTo(Unity, { as: 'unity' })
Unity.hasMany(Item, { as: 'items' })

module.exports = Item