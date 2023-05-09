const Client = require('../models/Client')

const all = async (req, res) => {
    try {
        let clients
        if (req.query.pagination === 'true') {
            clients = await Client.paginate(req.paginate)
        } else {
            clients = await Client.findAll({ include: 'sales' })
        }
        return res.json(clients)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}

const create = async (req, res) => {
    try {
        const newClient = await Client.create(req.body)
        return res.json(newClient)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const find = async (req, res) => {
    try {
        const clientFound = await Client.findByPk(req.params.id)
        return res.json(clientFound)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const update = async (req, res) => {
    try {
        const clientUp = await Client.findByPk(req.params.id)
        await clientUp.update(req.body)
        return res.json(clientUp)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const remove = async (req, res) => {
    try {
        const clientDel = await Client.destroy({
            where: req.params.id
        })
        return res.json(clientDel)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

module.exports = {
    all, create, find, update, remove
}