import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import api from '../api';
import HeaderApp from '../components/header';
import './pages.css'
import DeletePizza from './deletePizza';


function FindPizzaPage(props) {

  const id = props.match.params.id

  const [pizza, setPizza] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await api.get('/crudPizza/' + id
    ).then((response) => {
      console.log(response)
      setPizza(response.data.pizza)
    })
      .catch((err) => {
        if (err.response.data && err.response.data.error) {
          alert(err.response.data.error)
        } else {
          alert('Ops, ocorreu um erro ao tentar encontrar a pizza!\n Preencha todos os campos')
        }
      })
  }
  const [sabor, setSabor] = useState('')
  const [tamanho, setTamanho] = useState('')
  const [imagem, setImagem] = useState('')
  const [valor, setValor] = useState('')


  const edit = async () => {

    await api(
      {
        method: 'put',
        url: 'crudPizza/' + id,
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
        if (err.response.data && err.response.data.error) {
          alert(err.response.data.error)
        } else {
          alert('Ops, ocorreu um erro ao tentar salvar a pizza! \n \n Preencha todos os campos.')
        }
      })
  }
  return (
    <div className="App">
      <HeaderApp></HeaderApp>
      <h2>Informações</h2>
      <div id="imgGetOnePizza">
        <img src={pizza.imagem} width="300px" height="300px"></img>
        <p>Sabor: {pizza.sabor}</p>
        <p>Tamanho: {pizza.tamanho}</p>
        <p>Preço: {pizza.valor}</p>
        <TextField variant="filled" id="sabor" label="Sabor " value={sabor} onChange={(event) => setSabor(event.target.value)} /><br /><br />
        <TextField variant="filled" id="tamanho" type="Number" label="Tamanho " value={tamanho} onChange={(event) => setTamanho(event.target.value)} /><br /><br />
        <TextField variant="filled" id="imagem" label="Link da Imagem " value={imagem} onChange={(event) => setImagem(event.target.value)} /><br /><br />
        <TextField variant="filled" id="valor" label="Valor R$ " value={valor} onChange={(event) => setValor(event.target.value)} /><br /><br />
        <Button color='secondary' onClick={edit}>Salvar alterações</Button>
        <Button color='secondary' onClick={DeletePizza(id)}>Excluir Pizza</Button>
      </div>

    </div>
  )
}
export default FindPizzaPage