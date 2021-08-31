import React, { useState } from 'react'
import api from '../api'
import HeaderApp from '../components/header'
import { Button, TextField } from '@material-ui/core'
import './pages.css'

function CreatePizzaPage() {

    const [sabor, setSabor] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [imagem, setImagem] = useState('')
    const [valor, setValor] = useState('')

    const createPizza = async() => {
        const newPizza = { sabor: sabor, tamanho: tamanho, imagem: imagem, valor: valor }
        api.post('/crudPizza', newPizza)
            .then(() => {
                setSabor('')
                setTamanho('')
                setImagem('')
                setValor('')
            })
            .catch((err) => {
                if(err.response.data && err.response.data.error) {
                    alert(err.response.data.error)
                } else {
                    alert('Ops, ocorreu um erro ao tentar salvar a pizza!')
                }
            })
    }
    return (
        <div className="App" >
            <HeaderApp></HeaderApp>
            <h2>Cadastre os dados da pizza:</h2>
            <TextField variant="filled" color='secondary' id="sabor" label="Sabor " value={sabor} onChange={ (event) => setSabor(event.target.value)}/><br /><br />
            <TextField variant="filled" color='secondary' id="tamanho" type="Number" label="Tamanho " value={tamanho} onChange={ (event) => setTamanho(event.target.value)} /><br /><br />
            <TextField variant="filled" color='secondary' id="imagem" label="Link da Imagem " value={imagem} onChange={ (event) => setImagem(event.target.value)} /><br /><br />
            <TextField variant="filled" color='secondary' id="valor" label="Valor R$ " value={valor} onChange={ (event) => setValor(event.target.value)} /><br /><br />
            <Button color='secondary' onClick={createPizza}>ENVIAR</Button>
        </div>
    )
}

export default CreatePizzaPage