import { Button, TextField } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import api from '../api';
import HeaderApp from '../components/header';
import './pages.css'
import EditPizzaPage from './editPizza';


function FindPizzaPage(props) {

  let urlID = props.match.params.id

  const [pizza, setPizza] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => { await api.get('/crudPizza/' + urlID
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

  return (
    <div className="App">
      <HeaderApp></HeaderApp>
      <h2>Informações</h2>
      <div id="imgGetOnePizza">
        <img src={pizza.imagem} width="300px" height="300px"></img>
        <p>Sabor: {pizza.sabor}</p>
        <p>Tamanho: {pizza.tamanho}</p>
        <p>Preço: {pizza.valor}</p>
        <EditPizzaPage></EditPizzaPage>
      </div>
     
    </div>
  )
}
export default FindPizzaPage