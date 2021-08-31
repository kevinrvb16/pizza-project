const express = require('express')
const router = express.Router()
const pizzaRoute = require('./pizzaRoutes')
const pedidoRoute = require('./pedido')

router.use('/crudPizza', pizzaRoute)
router.use('/pedido', pedidoRoute)

module.exports = router