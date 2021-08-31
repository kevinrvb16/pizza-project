const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema( {
    sabor: String,
    tamanho: Number,
    imagem: String,
    valor: Number
})
module.exports = mongoose.model('Pizzas', PizzaSchema)