const Pedido = require('../model/pedidos')

const createPedido = async (req, res) => {
    const {} = req.body

    try {

        const pedido = await Pedido.create({ ...req.body })
        return res.send({ Pedido })
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar criar uma Pedidos!' })
    }
}

const listPedido = async (req, res) => {
    try {
        const pedido = await Pedido.find({})
        return res.send({ pedido })
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar listar um Pedido!' })
    }
}

const editPedido = async (req, res) => {
    try {
        const {} = req.body
        const pedido = await Pedido.findByIdAndUpdate(req.params.id,
            {
                pedido
            }, { new: true })
        return res.send({ pedido })
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar editar um Pedido!' })
    }
}

const deletePedido = async (req, res) => {

    try {
        await Pedido.deleteOne(req.body)
        return res.status(200).send('Pedido deletado com sucesso!')
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar deletar uma Pedido!' })
    }
}

module.exports = { createPedido, listPedido, deletePedido, editPedido }