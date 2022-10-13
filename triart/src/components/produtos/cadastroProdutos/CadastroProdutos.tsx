import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Container } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';

function CadastroProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state)=> state.tokens
    ) 

    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      tipo: '',
    });
  
    const [produtos, setProdutos] = useState<Produto>({
      id: 0,
      nome: '',
      descricao: '',
      quantidade: 0,
      preco: 0,
      categoria: null,
      usuario: null
    });
  
    useEffect(() => {
      if (token === '') {
        alert('Erro de conexão, realize o Login novamente');
        navigate('/login');
      }
    }, [token]);
  
    useEffect(() => {
      setProdutos({
        ...produtos,
        categoria: categoria,
      });
    }, [categoria]);

    useEffect(() => {
      getCategoria()
      if (id !== undefined) {
          findByIdProdutos(id)
      }
  }, [id])
  
    async function findByIdProdutos(id: string) {
      await buscaId(`produtos/${id}`, setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      getCategoria();
      if (id !== undefined) {
        findByIdProdutos(id);
      }
    }, [id]);
  
    async function getCategoria() {
      await busca('/categorias', setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    function updatedProduto(event: ChangeEvent<HTMLInputElement>) {
      setProdutos({
        ...produtos,
        [event.target.name]: event.target.value,
        categoria: categoria,
      });
    }
  
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
  
      if (id !== undefined) {
        put(`/produtos`, produtos, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
        alert('Produto atualizado com sucesso');
    } else {
        post(`/produtos`, produtos, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
        alert('Produto cadastrado com sucesso');
    }
    back()

}

function back() {
  navigate('/produtos')
}

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
          <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
          <TextField value={produtos.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="nome" label="nome" variant="outlined" name="titulo" margin="normal" fullWidth />
          <TextField value={produtos.descricao} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="descricao" label="descrição" name="texto" variant="outlined" margin="normal" fullWidth />
          <TextField value={produtos.quantidade} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="quantidade" label="quantidade" name="texto" variant="outlined" margin="normal" fullWidth />
          <TextField value={produtos.preco} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="preco" label="preço" name="texto" variant="outlined" margin="normal" fullWidth />
         

          <FormControl >
              <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
              <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  onChange={(event) => buscaId(`/categorias/${event.target.value}`, setCategoria, {
                      headers: {
                          'Authorization': token
                      }
                  })}>
                  {
                      categorias.map(categorias => (
                          <MenuItem value={categorias.id}>{categorias.tipo}</MenuItem>
                      ))
                  }
              </Select>
              <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
              <Button type="submit" variant="contained" color="primary">
                  Finalizar
              </Button>
          </FormControl>
      </form>
  </Container>
)
}

export default CadastroProdutos