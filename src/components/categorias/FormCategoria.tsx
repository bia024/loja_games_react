import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import type Categoria from '../../models/Categoria'
import { atualizar, cadastrar, listar } from '../../services/Service'

function FormCategoria() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: '' })

  useEffect(() => {
    if (id) {
      listar(`/categorias/${id}`).then(setCategoria)
    }
  }, [id])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, tipo: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (id) {
        await atualizar('/categorias', categoria)
        alert('Categoria atualizada com sucesso!')
      } else {
        await cadastrar('/categorias', categoria)
        alert('Categoria cadastrada com sucesso!')
      }
      navigate('/categorias')
    } catch {
      alert('Erro ao salvar categoria.')
    }
    setIsLoading(false)
  }

  return (
    <div className='container w-1/3 mx-auto my-8'>
      <h1 className='text-4xl text-center my-4 font-bold' style={{ color: '#0f6766' }}>
        {id ? 'Editar Categoria' : 'Nova Categoria'}
      </h1>
      <form onSubmit={handleSubmit} className='border flex flex-col rounded-2xl overflow-hidden shadow-md'>
        <header className='py-2 px-6 text-white font-bold text-2xl' style={{ backgroundColor: '#0f6766' }}>
          Dados da Categoria
        </header>
        <div className='flex flex-col gap-4 p-6 bg-slate-100'>
          <div className='flex flex-col gap-1'>
            <label className='text-slate-700 font-semibold'>Tipo</label>
            <input
              type='text'
              value={categoria.tipo}
              onChange={handleChange}
              placeholder='Nome da categoria'
              required
              className='border border-slate-300 rounded-lg p-2 focus:outline-none bg-white'
              style={{ borderColor: '#0f6766' }}
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full text-white py-3 font-bold text-lg flex items-center justify-center transition-colors'
          style={{ backgroundColor: '#0f6766' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
        >
          {isLoading ? <ClipLoader color='#ffffff' size={24} /> : <span>{id ? 'Atualizar' : 'Cadastrar'}</span>}
        </button>
      </form>
    </div>
  )
}

export default FormCategoria
