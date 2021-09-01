const Pizza = require('../model/pizzas')

const createPizza = async (req, res) => {
    const { sabor, tamanho, imagem, valor } = req.body
    if (!sabor || !tamanho || !imagem || !valor) return res.status(422).send({ error: "Dados insuficientes!" })

    try {
        if (await Pizza.findOne({ sabor: sabor })) return res.status(400).send({ error: 'Pizza já cadastrada' })

        const pizza = await Pizza.create({ ...req.body })
        return res.send({ pizza })
    }
    catch (err) {
        return res.status(400).send({ error: 'Erro ao tentar criar uma pizza!' })
    }
}

const listPizza = async (req, res) => {
    try {
        const pizzas = await Pizza.find({})
        return res.send({ pizzas })
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar listar uma pizza!' })
    }
}

const editPizza = async (req, res) => {
    try {
        const { sabor, tamanho, imagem, valor} = req.body
        const pizza = await Pizza.findByIdAndUpdate(req.params.id,
            {
                sabor,
                tamanho,
                imagem,
                valor
            }, { new: true })
        return res.send({ pizza })
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar editar uma pizza!' })
    }
}

const deletePizza = async (req, res) => {

    try {
        const pizza = await Pizza.findByIdAndDelete(req.params.id)
        return res.status(204).send('Pizza deletada com sucesso!'+ {pizza})
    }
    catch (err) {
        return res.status(400).send({ error: 'Erro ao tentar deletar uma pizza!' })
    }
}

const findPizza = async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id)
        return res.send({ pizza })
    }
    catch (err) {
        return res.send({ error: 'Erro ao tentar encontrar uma pizza!' })
    }
}
module.exports = { createPizza, listPizza, deletePizza, editPizza, findPizza }