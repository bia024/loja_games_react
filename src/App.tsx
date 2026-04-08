import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import DeletarCategoria from './components/categorias/DeletarCategoria'
import FormCategoria from './components/categorias/FormCategoria'
import ListarCategorias from './components/categorias/ListarCategorias'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import FormProduto from './components/produtos/FormProduto'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categorias' element={<ListarCategorias />} />
          <Route path='/cadastrarCategoria' element={<FormCategoria />} />
          <Route path='/editarCategoria/:id' element={<FormCategoria />} />
          <Route path='/deletarCategoria/:id' element={<DeletarCategoria />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrarProduto' element={<FormProduto />} />
          <Route path='/editarProduto/:id' element={<FormProduto />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
