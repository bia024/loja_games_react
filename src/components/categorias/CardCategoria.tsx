import { Link } from 'react-router-dom'
import type Categoria from '../../models/Categoria'

interface Props {
  categoria: Categoria
}

function CardCategoria({ categoria }: Props) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md'>
      <header className='py-2 px-6 text-white font-bold text-2xl' style={{ backgroundColor: '#0f6766' }}>
        Categoria
      </header>
      <p className='p-8 text-3xl bg-slate-100 h-full text-slate-800'>{categoria.tipo}</p>
      <div className='flex'>
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className='w-full text-center text-white py-2 transition-colors'
          style={{ backgroundColor: '#0f6766' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
        >
          Editar
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className='w-full text-center text-white py-2 bg-red-500 hover:bg-red-700 transition-colors'
        >
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria
