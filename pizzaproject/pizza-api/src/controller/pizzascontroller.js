const express = require('express')
const server = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PizzaModel = require('../model/pizzas')

class PizzaController {
    async store(req, res) {

        const { sabor, tamanho, fatias, borda } = req.body

        const dados = {
            sabor,
            tamanho,
            fatias,
            borda
        }

        await PizzaModel.create(dados, (err) => {
            if (err) return res.json({
                error: true,
                message: "Erro ao tentar inserir no mongoDB"
            })

            return res.json({
                error: false,
                message: "Pizza criada com sucesso"
            })
        })
    }

    async createPizza(req, res){
        const pizza = await PizzaModel.create({...req.body})

        return res.send
    }
}
module.exports = PizzaController