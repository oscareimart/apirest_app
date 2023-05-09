const DetailPurchase = require('./DetailPurchase');
const DetailSale = require('./DetailSale');
const Warehouse = require('./Warehouse');

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const Movement = sequelizeConn.define('movements', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // warehouse_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Warehouse,
    //         key: 'id'
    //     }
    // },
    // detail_purchase_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: DetailPurchase,
    //         key: 'id'
    //     }
    // },
    // detail_sale_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: DetailSale,
    //         key: 'id'
    //     }
    // }
});

DetailPurchase.belongsToMany(Warehouse, { through: Movement })
Warehouse.belongsToMany(DetailPurchase, { through: Movement })

DetailSale.belongsToMany(Warehouse, { through: Movement })
Warehouse.belongsToMany(DetailSale, { through: Movement })

// Warehouse.hasMany(Movement)
// Movement.belongsTo(Warehouse)

module.exports = Movement