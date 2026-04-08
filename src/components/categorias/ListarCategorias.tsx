import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import type Categoria from '../../models/Categoria'
import { listar } from '../../services/Service'
import CardCategoria from './CardCategoria'

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function buscarCategorias() {
    setIsLoading(true)
    const dados = await listar('/categorias')
    setCategorias(dados)
    setIsLoading(false)
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <div className='container mx-auto my-8 px-4'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl font-bold' style={{ color: '#0f6766' }}>Categorias</h1>
        <Link
          to='/cadastrarCategoria'
          className='text-white font-bold py-2 px-6 rounded-lg transition-colors'
          style={{ backgroundColor: '#0f6766' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
        >
          Nova Categoria
        </Link>
      </div>

      {isLoading ? (
        <div className='flex justify-center my-16'>
          <ClipLoader color='#0f6766' size={48} />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categorias.map(cat => (
            <CardCategoria key={cat.id} categoria={cat} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListarCategorias
