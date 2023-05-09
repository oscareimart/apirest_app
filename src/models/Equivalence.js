const Unity = require('./Unity')
const Item = require('./Item')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Equivalence = sequelizeConn.define('equivalencies', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        default: 0
    },
    // unity_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Unity,
    //         key: 'id'
    //     }
    // },
    // item_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Item,
    //         key: 'id'
    //     }
    // }
});

Unity.belongsToMany(Item, { through: Equivalence })
Item.belongsToMany(Unity, { through: Equivalence })

Unity.belongsTo(Unity)
Unity.hasMany(Unity)

module.exports = Equivalence