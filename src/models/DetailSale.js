const Sale = require('./Sale')
const Item = require('./Item')

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const DetailSale = sequelizeConn.define('detail_sales', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // sale_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Sale,
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

Sale.belongsToMany(Item, { through: DetailSale })
Item.belongsToMany(Sale, { through: DetailSale })

module.exports = DetailSale