const express = require('express')
const router = express.Router()
const pizzascontroller = require('../controller/pizzascontroller')

router.post('/', (req, res) => {
    pizzascontroller.createPizza(req, res)
})

router.get('/', (req, res) => {
    pizzascontroller.listPizza(req, res)
})

//Rota de edição do tamanho da pizza. Primeiro parâmetro o objeto sabor pra saber qual pizza será alterada e o segundo parametro o objeto tamanho que recebe o novo tamanho
router.put('/:id', async (req, res) => {
    pizzascontroller.editPizza(req, res)
})

router.delete('/:id', async (req, res) => {
    pizzascontroller.deletePizza(req, res)
})

router.get('/:id', (req, res) => {
    pizzascontroller.findPizza(req, res)
})
module.exports = router