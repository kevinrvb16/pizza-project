const express = require('express')
const router = express.Router()
const pedidoscontroller = require('../controller/pedidoscontroller')

router.post('/', (req,res) => {
    pedidoscontroller.createPedido(req, res)
})

router.get('/', (req,res) => {
    pedidoscontroller.listPedido(req, res)
})

router.put('/', (req,res) => {
    pedidoscontroller.editPedido(req, res)
})

router.delete('/', (req, res) => {
    pedidoscontroller.deletePedido(req, res)
})
module.exports = router