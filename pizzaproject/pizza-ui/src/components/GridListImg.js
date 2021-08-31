import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import api from '../api';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import './routerLink.css'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarImageList() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await api.get('/crudPizza').then(response => {
      console.log(response)
      setPizzas(response.data.pizzas)
    })
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2}>
          <Button>
            <Link activeClass="active" to="pizzas" spy={true} smooth={true}>Listar Pizzas Cadastradas</Link>
          </Button>
          <Button>
            <RouterLink to="/create-pizza">Cadastrar Pizza</RouterLink>
          </Button>
          <Button>
            <RouterLink to="/edit-pizza">Editar Pizza</RouterLink>
          </Button>
          <Button>
            <RouterLink to="/delete-pizza">Excluir Pizza</RouterLink>
          </Button>

        </ImageListItem>
        {pizzas.map((item) => (
          <ImageListItem id='pizzas' key={item._id}>
            <img id='pizzaCapa' src={item.imagem} alt={'Pizza de ' + item.sabor} />
            <ImageListItemBar
              title={item.sabor + " R$" + item.valor}
              subtitle={<span>Tamanho: {item.tamanho}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.sabor}`} className={classes.icon} >
                  <RouterLink to={"/find-pizza/" + item._id } ><EditIcon 
                  /></RouterLink>
                  
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}