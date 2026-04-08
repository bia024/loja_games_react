import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import type Categoria from '../../models/Categoria'
import { deletar, listar } from '../../services/Service'

function DeletarCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  useEffect(() => {
    if (id) {
      listar(`/categorias/${id}`).then(setCategoria)
    }
  }, [id])

  function retornar() {
    navigate('/categorias')
  }

  async function deletarCategoria() {
    setIsLoading(true)
    try {
      await deletar(`/categorias/${id}`)
      alert('Categoria deletada com sucesso!')
    } catch {
      alert('Erro ao deletar categoria.')
    }
    setIsLoading(false)
    retornar()
  }

  return (
    <div className='container w-1/3 mx-auto my-8'>
      <h1 className='text-4xl text-center my-4 font-bold' style={{ color: '#0f6766' }}>
        Deletar Categoria
      </h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza que deseja deletar a categoria:{' '}
        <span className='text-red-500'>{categoria.tipo}</span>?
      </p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md'>
        <header className='py-2 px-6 text-white font-bold text-2xl' style={{ backgroundColor: '#0f6766' }}>
          Categoria
        </header>
        <p className='p-8 text-3xl bg-slate-100 h-full text-slate-800'>{categoria.tipo}</p>
        <div className='flex'>
          <button
            className='text-white bg-red-500 hover:bg-red-700 w-full py-2 transition-colors'
            onClick={retornar}
          >
            Não
          </button>
          <button
            className='w-full text-white flex items-center justify-center py-2 transition-colors'
            style={{ backgroundColor: '#0f6766' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
            onClick={deletarCategoria}
          >
            {isLoading ? <ClipLoader color='#ffffff' size={24} /> : <span>Sim</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria
