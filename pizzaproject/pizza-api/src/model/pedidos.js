const mongoose = require('mongoose')

const PedidosSchema = new mongoose.Schema( {
    pedido: { type: Array, required: true, unique: true}
})
module.exports = mongoose.model('Pedidos', PedidosSchema)