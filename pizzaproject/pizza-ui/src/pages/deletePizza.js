import React from 'react';
import api from '../api';
import './pages.css'
import { useHistory } from "react-router-dom";

function DeletePizza(id) {
    let history = useHistory()
    const deletePizza = async () => {
        
        await api({
            method: "delete",
            url: "/crudpizza/" + id
        })
            .then(
                () => {
                    
                    alert("Você será redirecionado para a página de pizzas")
                    history.push('/')
                }
            )
            .catch((err) => {
                if (err.response.data && err.response.data.error) {
                    alert(err.response.data.error)
                } else {
                    alert('Ops, ocorreu um erro ao tentar deletar a pizza!')
                }
            })
    }
    return (deletePizza)
}
export default DeletePizza