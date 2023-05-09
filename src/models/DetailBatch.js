const Batch = require('./Batch');
const DetailPurchase = require('./DetailPurchase');
const Movement = require('./Movement');
const Purchase = require('./Purchase');

const sequelizeConn = require('../config/db.config').sequelize
const Sequelize = require('../config/db.config').Sequelize

const DetailBatch = sequelizeConn.define('detail_batchs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    batch_id: {
        type: Sequelize.INTEGER,
        reference: {
            model: Batch,
            key: 'id'
        }
    },
    // detail_purchase_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: DetailPurchase,
    //         key: 'id'
    //     }
    // },
    // purchase_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Purchase,
    //         key: 'id'
    //     }
    // },
    // movement_id: {
    //     type: Sequelize.INTEGER,
    //     reference: {
    //         model: Movement,
    //         key: 'id'
    //     }
    // }
});

Batch.belongsToMany(Movement, { through: DetailBatch })
Movement.belongsToMany(Batch, { through: DetailBatch })

Batch.belongsToMany(Purchase, { through: DetailBatch })
Purchase.belongsToMany(Batch, { through: DetailBatch })

DetailPurchase.belongsToMany(Batch, { through: DetailBatch })
Batch.belongsToMany(DetailPurchase, { through: DetailBatch })

module.exports = DetailBatch