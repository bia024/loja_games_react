import { useEffect, useState, type ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import type Categoria from '../../models/Categoria'
import type Produto from '../../models/Produto'
import { atualizar, cadastrar, listar } from '../../services/Service'

function FormProduto() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
    categoria: null,
  })

  useEffect(() => {
    listar('/categorias').then(setCategorias)
    if (id) listar(`/produtos/${id}`).then(setProduto)
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({ ...produto, [e.target.name]: e.target.value })
  }

  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(c => c.id === Number(e.target.value))
    setProduto({ ...produto, categoria: categoriaSelecionada ?? null })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (id) {
        await atualizar('/produtos', produto)
        alert('Produto atualizado com sucesso!')
      } else {
        await cadastrar('/produtos', produto)
        alert('Produto cadastrado com sucesso!')
      }
      navigate('/produtos')
    } catch {
      alert('Erro ao salvar produto.')
    }
    setIsLoading(false)
  }

  return (
    <div className='container w-1/3 mx-auto my-8'>
      <h1 className='text-4xl text-center my-4 font-bold' style={{ color: '#0f6766' }}>
        {id ? 'Editar Produto' : 'Novo Produto'}
      </h1>
      <form onSubmit={handleSubmit} className='border flex flex-col rounded-2xl overflow-hidden shadow-md'>
        <header className='py-2 px-6 text-white font-bold text-2xl' style={{ backgroundColor: '#0f6766' }}>
          Dados do Produto
        </header>

        <div className='flex flex-col gap-4 p-6 bg-slate-100'>

          <div className='flex flex-col gap-1'>
            <label className='text-slate-700 font-semibold'>Nome do Produto</label>
            <input
              type='text'
              name='nome'
              placeholder='Nome do produto'
              required
              value={produto.nome}
              onChange={atualizarEstado}
              className='border-2 rounded p-2 focus:outline-none bg-white'
              style={{ borderColor: '#0f6766' }}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-slate-700 font-semibold'>Preço</label>
            <input
              type='number'
              name='preco'
              placeholder='0.00'
              required
              min='0'
              step='0.01'
              value={produto.preco}
              onChange={atualizarEstado}
              className='border-2 rounded p-2 focus:outline-none bg-white'
              style={{ borderColor: '#0f6766' }}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-slate-700 font-semibold'>Foto (URL)</label>
            <input
              type='text'
              name='foto'
              placeholder='https://...'
              required
              value={produto.foto}
              onChange={atualizarEstado}
              className='border-2 rounded p-2 focus:outline-none bg-white'
              style={{ borderColor: '#0f6766' }}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-slate-700 font-semibold'>Categoria</label>
            <select
              required
              value={produto.categoria?.id ?? ''}
              onChange={selecionarCategoria}
              className='border-2 rounded p-2 focus:outline-none bg-white'
              style={{ borderColor: '#0f6766' }}
            >
              <option value='' disabled>Selecione uma categoria</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.tipo}</option>
              ))}
            </select>
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

export default FormProduto
