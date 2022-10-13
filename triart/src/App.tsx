import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import CadastroProdutos from './components/produtos/cadastroProdutos/CadastroProdutos';
import { Provider } from 'react-redux';
import store from './store/Store';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (

    <Provider store={store}>
    <BrowserRouter>
      
        <Navbar />

        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria />} />
            <Route path="/atualizarProduto" element={<CadastroProdutos />} />
            <Route path="/deletarProduto/:id" element={<DeletarProdutos/>} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/atualizarProduto/:id" element={<CadastroProdutos />} />


          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
    </Provider>
  );
}
export default App;
