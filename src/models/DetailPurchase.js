const Purchase = require('./Purchase')
const Item = require('./Item')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const DetailPurchase = sequelizeConn.define('detail_purchases', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // purchase_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Purchase,
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

Purchase.belongsToMany(Item, { through: DetailPurchase })
Item.belongsToMany(Purchase, { through: DetailPurchase })

module.exports = DetailPurchase