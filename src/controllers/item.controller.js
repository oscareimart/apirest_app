const Item = require('../models/Item')

const all = async (req, res) => {
    try {
        let items
        if (req.query.pagination === 'true') {
            items = await Item.paginate(req.paginate)
        } else {
            items = await Item.findAll()
        }
        return res.json(items)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}

const create = async (req, res) => {
    try {
        const newItem = await Item.create(req.body)
        return res.json(newItem)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const find = async (req, res) => {
    try {
        const itemFound = await Item.findByPk(req.params.id)
        return res.json(itemFound)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const update = async (req, res) => {
    try {
        const itemUp = await Item.findByPk(req.params.id)
        await itemUp.update(req.body)
        return res.json(itemUp)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const remove = async (req, res) => {
    try {
        const itemDel = await Item.destroy({
            where: req.params.id
        })
        return res.json(itemDel)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

module.exports = {
    all, create, find, update, remove
}