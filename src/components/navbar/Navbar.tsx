import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react'

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className='w-full flex items-center justify-between px-8 py-3 relative' style={{ backgroundColor: '#1a2332' }}>

      <Link to='/' className='flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase shrink-0'>
        <img src='/icons.svg' alt='logo' className='w-8 h-8' />
        Loja de Games
      </Link>

      <div className='flex items-center flex-1 mx-10 max-w-md'>
        <input
          type='text'
          placeholder='Buscar produto...'
          className='flex-1 px-3 py-1.5 text-sm bg-white text-slate-800 outline-none rounded-l'
        />
        <button className='px-3 py-1.5 rounded-r' style={{ backgroundColor: '#0f6766' }}>
          <Search size={18} color='white' />
        </button>
      </div>

      <div className='flex items-center gap-5 text-white text-sm shrink-0'>

        <Link to='/produtos' className='hover:text-teal-300 transition-colors'>Produtos</Link>
        <Link to='/categorias' className='hover:text-teal-300 transition-colors'>Categorias</Link>

        <div className='relative'>
          <button
            className='flex items-center gap-1 hover:text-teal-300 transition-colors'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Cadastrar <ChevronDown size={14} />
          </button>
          {dropdownOpen && (
            <div
              className='absolute right-0 top-8 rounded-lg shadow-lg py-1 z-50 w-44 text-sm'
              style={{ backgroundColor: '#1a2332', border: '1px solid #0f6766' }}
            >
              <Link
                to='/cadastrarProduto'
                className='block px-4 py-2 hover:text-teal-300 transition-colors'
                onClick={() => setDropdownOpen(false)}
              >
                Novo Produto
              </Link>
              <Link
                to='/cadastrarCategoria'
                className='block px-4 py-2 hover:text-teal-300 transition-colors'
                onClick={() => setDropdownOpen(false)}
              >
                Nova Categoria
              </Link>
            </div>
          )}
        </div>

        <Link
          to='/login'
          className='px-4 py-1.5 rounded-lg text-white font-semibold transition-colors'
          style={{ backgroundColor: '#0f6766' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
        >
          Entrar
        </Link>

        <Link to='/perfil' className='hover:text-teal-300 transition-colors'>
          <User size={22} />
        </Link>
        <Link to='/carrinho' className='hover:text-teal-300 transition-colors'>
          <ShoppingCart size={22} />
        </Link>

      </div>
    </div>
  )
}

export default Navbar
