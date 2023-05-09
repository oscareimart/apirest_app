const Sale = require('../models/Sale')
const Item = require('../models/Item')

const all = async (req, res) => {
    try {
        let sales
        if (req.query.pagination === 'true') {
            sales = await Sale.paginate(req.paginate)
        } else {
            sales = await Sale.findAll({ include: 'client' })
        }
        return res.json(sales)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}

const create = async (req, res) => {
    try {
        const newSale = await Sale.create(req.body)
        const itemFound = await Item.findByPk(req.body.itemId)
        await newSale.addItem(itemFound)
        await itemFound.addSale(newSale)
        return res.json(newSale)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const find = async (req, res) => {
    try {
        const saleFound = await Sale.findByPk(req.params.id)
        return res.json(saleFound)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const update = async (req, res) => {
    try {
        const saleUp = await Sale.findByPk(req.params.id)
        await saleUp.update(req.body)
        return res.json(saleUp)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const remove = async (req, res) => {
    try {
        const saleDel = await Sale.destroy({
            where: req.params.id
        })
        return res.json(saleDel)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

module.exports = {
    all, create, find, update, remove
}