import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import api from '../api';
import './pages.css'


function EditPizzaPage(){

    const [sabor, setSabor] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [imagem, setImagem] = useState('')
    const [valor, setValor] = useState('')
    const [urlID, seturlID] = useState('')


    const edit = async (props) => {
        let urlID = props.match.params.id

        await api(
            {
                method: 'put',
                url: 'crudPizza/' + urlID,
                data: {
                    sabor: sabor,
                    tamanho: tamanho,
                    imagem: imagem,
                    valor: valor
                }
            }
        ).then(() => {
            setSabor('')
            setTamanho('')
            setImagem('')
            setValor('')
        })
        .catch((err) => {
            if(err.response.data && err.response.data.error) {
                alert(err.response.data.error)
            } else {
                alert('Ops, ocorreu um erro ao tentar salvar a pizza! \n \n Preencha todos os campos.')
            }
        })
    }
    return(
        <div className="App">
            <TextField variant="filled" id="sabor" label="Sabor " value={sabor} onChange={ (event) => setSabor(event.target.value)} /><br /><br />
            <TextField variant="filled" id="tamanho" type="Number" label="Tamanho " value={tamanho} onChange={ (event) => setTamanho(event.target.value)} /><br /><br />
            <TextField variant="filled" id="imagem" label="Link da Imagem " value={imagem} onChange={ (event) => setImagem(event.target.value)} /><br /><br />
            <TextField variant="filled" id="valor" label="Valor R$ " value={valor} onChange={ (event) => setValor(event.target.value)} /><br /><br />
            <Button color='secondary' onClick={edit}>Salvar alterações</Button>
        </div>
    )
}
export default EditPizzaPage