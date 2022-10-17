import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
    objectFit: 'contain',
    width: 'auto',
  },
});

function ListaProdutos() {

    let navigate = useNavigate();
    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state)=> state.tokens
    ) 

useEffect(() => {
  if (token === ''){
    alert('Erro de conexão, realize o Login novamente')
    navigate('/login')
  }
}, [token])

async function getProdutos() {
  await busca("/produtos", setProdutos, {
      headers: {'Authorization': token}
    })
}

useEffect(() => {
  getProdutos()
}, [produtos.length])

const classes = useStyles();


return (
  <div className="listaCards">
    {produtos.map((produtos) => (
      <Card className={classes.root} key={produtos.id}>
          <CardActionArea>
          <Link to={`/produto/${produtos.id}`} className='text-decorator-none' >
            <CardMedia
              className={classes.media}
              image={produtos.foto}
              title={produtos.nome}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className='titleDescription'>
                {produtos.nome}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="productDescription"
              >
                {produtos.descricao}
              </Typography>
            </CardContent>
            </Link>
          </CardActionArea>
          <CardActions className='cardActions'>
            <Link to={`/produto/${produtos.id}`} className='text-decorator-none'>
              <Button size="small" color="primary" variant="contained" fullWidth>
                Ver mais
              </Button>
            </Link>
          </CardActions>
        </Card>
      
    ))}
  </div>
);
}

export default ListaProdutos