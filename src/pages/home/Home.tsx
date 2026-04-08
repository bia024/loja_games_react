import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ backgroundColor: '#1a2332' }} className='min-h-screen'>
      <div className='flex items-center justify-between px-16 py-16'>
        <div className='text-white max-w-sm'>
          <h1 className='text-4xl font-bold mb-3'>Seja bem vinde!</h1>
          <p className='text-slate-300 mb-8'>Aqui você encontra os melhores Games!</p>
          <Link
            to='/produtos'
            className='border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-slate-900 transition-colors'
          >
            Novo Produto
          </Link>
        </div>
        <div className='w-80'>
          <img src='/hero.png' alt='hero' className='w-full' />
        </div>
      </div>

    </div>
  )
}

export default Home
