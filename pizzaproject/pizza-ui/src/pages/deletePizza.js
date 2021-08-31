import React, { useState } from 'react'
import api from '../api';
import HeaderApp from '../components/header';
import { Button, TextField } from '@material-ui/core';
import './pages.css'


function DeletePizzaPage(){

    const [sabor, setSabor] = useState()

    const deletePizza = async () => {
        const pizzaExcluida = {sabor: sabor}
    await api.delete('/crudPizza', {data: pizzaExcluida}).then(
            () => {
                setSabor('')
            }
        )
        .catch((err) => {
            if(err.response.data && err.response.data.error) {
                alert(err.response.data.error)
            } else {
                alert('Ops, ocorreu um erro ao tentar deletar a pizza!')
            }
        })
    }
    return(
        <div className="App">
            <HeaderApp></HeaderApp>
            <h2>Digite o sabor da pizza que quer deletar:</h2>
            <TextField variant="filled" color="secondary" label="Sabor " value={sabor}  onChange={ (event) => setSabor(event.target.value)} /><br /><br />
            <Button color='secondary' onClick={deletePizza}>ENVIAR</Button>
        </div>
        
    )
}
export default DeletePizzaPage