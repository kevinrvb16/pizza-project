const express = require('express')
const router = express.Router()
const PizzaController = require('../controller/pizzascontroller')

router.post('/', (req, res) => {
    try {
        createPizza(req, res)
    }
    catch {
        console.log('erro')
    }
    //return res.PizzaController.store(req, res)
})

router.get('/', (req,res) => {
    try {
        return res.status(200).send('Olá bem vindo a pizzaria, está é a rota para cadastrar uma pizza!')
    }
    catch {
        return res.send({ error: 'Erro no Get!'})
    }
})

router.put('/', (req,res) => {
    try {
        res.status(200).send('Olá, esta é a rota para editar uma pizzaria')
    }
    catch {
        return res.send({ error: 'Erro no Put!'})
    }
})

router.delete('/', (req, res) => {
    try {
       res.status(200).send('Delete uma pizza')       
    } catch{
        return res.send({ error: 'Erro no Delete!'})
    }
})
module.exports = router