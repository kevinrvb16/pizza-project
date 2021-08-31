const express = require('express')
const App = express()
const port = 3003
const indexRoute = require('./routes/index')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/pizzaria'
const cors = require('cors')

mongoose.connect(url,{
    poolSize: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

db.on('disconnected', () => {
    console.log('Applicação desconectada do bando de dados!')
})

db.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
})

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(cors())

App.listen(port, (req,res) => {
    console.log(`Servidor está executando na porta: ${port}` )
})

App.use(indexRoute)