const express = require('express')
const server = express()
const port = 3003
const indexRoute = require('./routes/index')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/pizzaria'

mongoose.connect(url,{
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
    console.log('Succesfully connected')
})

db.on('disconnected', () => {
    console.log('Applicação desconectada do bando de dados!')
})

db.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
})
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
//server.use('/pizza',indexRoute)

server.listen(port, (req,res) => {
    console.log(`Servidor está executando na porta: ${port}` )
})

server.use(indexRoute)

//Pesquisa todos os docs com a propriedade de sabor que comeca com calab em formato de array na callback
//Pizza.find( {sabor: /^calab/ }, callback)