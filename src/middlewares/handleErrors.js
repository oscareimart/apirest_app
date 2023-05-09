const handleErrors = (req, res, next) => {
    try {
        next()
    } catch (error) {
        console.log(error);
        return res.json(error)
    }
}

module.exports = { handleErrors }