import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { cadastrar } from '../../services/Service'

interface UsuarioCadastro {
  nome: string
  usuario: string
  senha: string
  foto: string
}

function Cadastro() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [usuario, setUsuario] = useState<UsuarioCadastro>({
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  })

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        const { ...dadosSemId } = usuario
        await cadastrar('/usuarios/cadastrar', dadosSemId)
        alert('Usuário cadastrado com sucesso!')
        navigate('/login')
      } catch {
        alert('Erro ao cadastrar o usuário. Verifique os dados e tente novamente.')
      }
    } else {
      alert('Dados inconsistentes! A senha deve ter no mínimo 8 caracteres e as senhas devem ser iguais.')
      setUsuario({ ...usuario, senha: '' })
      setConfirmarSenha('')
    }

    setIsLoading(false)
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold'>

      <div
        className='lg:block hidden w-full min-h-screen bg-cover bg-center'
        style={{ backgroundImage: "url('https://i.imgur.com/ZZFAmzo.jpg')" }}
      />

      {/* Formulário */}
      <form
        className='flex justify-center items-center flex-col w-2/3 gap-3'
        onSubmit={handleSubmit}
      >
        <h2 className='text-5xl mb-2' style={{ color: '#0f6766' }}>Cadastrar</h2>

        {[
          { label: 'Nome', id: 'nome', type: 'text', placeholder: 'Seu nome' },
          { label: 'Usuário', id: 'usuario', type: 'text', placeholder: 'Seu e-mail' },
          { label: 'Foto', id: 'foto', type: 'text', placeholder: 'URL da foto' },
          { label: 'Senha', id: 'senha', type: 'password', placeholder: 'Mínimo 8 caracteres' },
        ].map(({ label, id, type, placeholder }) => (
          <div key={id} className='flex flex-col w-full'>
            <label htmlFor={id} className='text-slate-700'>{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              className='border-2 rounded p-2 focus:outline-none'
              style={{ borderColor: '#0f6766' }}
              value={usuario[id as keyof UsuarioCadastro] as string}
              onChange={atualizarEstado}
            />
          </div>
        ))}

        <div className='flex flex-col w-full'>
          <label htmlFor='confirmarSenha' className='text-slate-700'>Confirmar Senha</label>
          <input
            type='password'
            id='confirmarSenha'
            name='confirmarSenha'
            placeholder='Confirmar senha'
            className='border-2 rounded p-2 focus:outline-none'
            style={{ borderColor: '#0f6766' }}
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>

        <div className='flex justify-around w-full gap-8 mt-2'>
          <button
            type='reset'
            className='rounded text-white bg-red-400 hover:bg-red-600 w-1/2 py-2 transition-colors'
            onClick={() => navigate('/')}
          >
            Cancelar
          </button>
          <button
            type='submit'
            className='rounded text-white w-1/2 py-2 flex justify-center transition-colors'
            style={{ backgroundColor: '#0f6766' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
          >
            {isLoading ? <ClipLoader color='#ffffff' size={24} /> : <span>Cadastrar</span>}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
