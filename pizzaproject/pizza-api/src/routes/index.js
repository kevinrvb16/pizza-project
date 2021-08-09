const express = require('express')
const router = express.Router()
const pizzaRoute = require('./pizzaRoutes')

router.use('/crudpizza', pizzaRoute)
module.exports = router