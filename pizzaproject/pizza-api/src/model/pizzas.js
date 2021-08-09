const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema( {
    sabor: String,
    tamanho: Number,
    fatias: Number,
    borda: Boolean
})
const pizza = mongoose.model('Pizza', PizzaSchema)
module.exports = pizza