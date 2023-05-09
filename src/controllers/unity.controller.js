const Unity = require('../models/Unity')

const all = async (req, res) => {
    try {
        let unities
        if (req.query.pagination === 'true') {
            unities = await Unity.paginate(req.paginate)
        } else {
            unities = await Unity.findAll()
        }
        return res.json(unities)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }

}

const create = async (req, res) => {
    try {
        const newUnity = await Unity.create(req.body)
        return res.json(newUnity)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const find = async (req, res) => {
    try {
        const unityFound = await Unity.findByPk(req.params.id)
        return res.json(unityFound)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const update = async (req, res) => {
    try {
        const unityUp = await Unity.findByPk(req.params.id)
        await unityUp.update(req.body)
        return res.json(unityUp)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

const remove = async (req, res) => {
    try {
        const unityDel = await Unity.destroy({
            where: req.params.id
        })
        return res.json(unityDel)
    } catch (error) {
        console.log(error);
        return res.json(error)
    }

}

module.exports = {
    all, create, find, update, remove
}