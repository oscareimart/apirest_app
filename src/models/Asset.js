const Batch = require('./Batch')
const Item = require('./Item')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Asset = sequelizeConn.define('assets', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // batch_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Batch,
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

Batch.belongsToMany(Item, { through: Asset })
Item.belongsToMany(Batch, { through: Asset })

module.exports = Asset