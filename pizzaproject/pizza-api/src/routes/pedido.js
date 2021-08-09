const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    try {
        return res.status(200).send('Olá bem vindo a pizzaria, está é a rota para cadastrar um pedido!')
    }
    catch{

    }
})

router.get('/', (req,res) => {
    try {
        return res.status(200).send('Olá bem vindo a pizzaria, está é a rota para cadastrar uma pedido!')
    }
    catch {

    }
})

router.put('/', (req,res) => {
    try {
        res.status(200).send('Olá, esta é a rota para editar um pedido')
    }
    catch {

    }
})

router.delete('/', (req, res) => {
    try {
        res.status(200).send('Delete um pedido')
    }
    catch {

    }
})
module.exports = router