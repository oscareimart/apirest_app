const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller')

const resources = (req, res, next) => {
    // req.controller = 
    // const index = (req, res) => {
    // switch (req.method) {
    //     case 'GET':
    //         all(req, res)
    //         break;

    //     case 'POST':
    //         create(req, res)
    //         break;

    //     case 'PUT':

    //         break;

    //     case 'DELETE':

    //         break;
    // }
    // }
    next()
}

module.exports = { resources }