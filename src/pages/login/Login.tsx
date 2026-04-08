import { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { api } from '../../services/Service'

function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [usuarioLogin, setUsuarioLogin] = useState({ usuario: '', senha: '' })

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({ ...usuarioLogin, [e.target.name]: e.target.value })
  }

  async function login(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    try {
      await api.post('/usuarios/logar', usuarioLogin)
      navigate('/')
    } catch {
      alert('Usuário ou senha inválidos.')
    }
    setIsLoading(false)
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold'>
      <form className='flex justify-center items-center flex-col w-1/2 gap-4' onSubmit={login}>
        <h2 className='text-5xl' style={{ color: '#0f6766' }}>Entrar</h2>

        <div className='flex flex-col w-full'>
          <label htmlFor='usuario' className='text-slate-700'>Usuário</label>
          <input
            type='text'
            id='usuario'
            name='usuario'
            placeholder='Usuário'
            className='border-2 rounded p-2 focus:outline-none'
            style={{ borderColor: '#0f6766' }}
            onChange={atualizarEstado}
          />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='senha' className='text-slate-700'>Senha</label>
          <input
            type='password'
            id='senha'
            name='senha'
            placeholder='Senha'
            className='border-2 rounded p-2 focus:outline-none'
            style={{ borderColor: '#0f6766' }}
            onChange={atualizarEstado}
          />
        </div>

        <button
          type='submit'
          className='rounded text-white w-1/2 py-2 flex justify-center transition-colors'
          style={{ backgroundColor: '#0f6766' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a4f4e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f6766')}
        >
          {isLoading ? <ClipLoader color='#ffffff' size={24} /> : <span>Entrar</span>}
        </button>

        <hr className='w-full' style={{ borderColor: '#0f6766' }} />

        <p className='font-normal'>
          Ainda não tem uma conta?{' '}
          <Link to='/cadastro' className='font-bold hover:underline' style={{ color: '#0f6766' }}>
            Cadastre-se
          </Link>
        </p>
      </form>

      <div
        className='lg:block hidden w-full min-h-screen bg-cover bg-center'
        style={{ backgroundImage: "url('https://i.imgur.com/ZZFAmzo.jpg')" }}
      />
    </div>
  )
}

export default Login
