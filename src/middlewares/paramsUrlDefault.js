const { setAttrStringUrl, setOrderStringUrl } = require('../utils/strings')

const setParams = (req, res, next) => {
    req.paginate = {}
    try {
        if (req.query.pagination) {
            !req.query.page ? req.paginate.page = 1 : req.paginate.page = parseInt(req.query.page)
            !req.query.paginate ? req.paginate.paginate = 10 : req.paginate.paginate = parseInt(req.query.paginate)
            !req.query.order ? req.paginate.order = [['createdAt', 'ASC']] : req.paginate.order = setOrderStringUrl(req.query.order)
            if (req.query.attributes) req.paginate.attributes = setAttrStringUrl(req.query.attributes)

        }
        next()
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { setParams }