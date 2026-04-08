function Footer() {
  return (
    <div className='w-full text-white text-center py-6' style={{ backgroundColor: '#1a2332' }}>
      <p className='font-semibold text-sm'>Loja de Games Generation | Copyright: 2025</p>
      <p className='text-xs mt-1 mb-3' style={{ color: '#a0aec0' }}>Acesse nossas Redes Sociais</p>
      <div className='flex justify-center gap-4'>
        <a href='#' className='hover:text-teal-300 transition-colors'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z'/><circle cx='4' cy='4' r='2'/>
          </svg>
        </a>
        <a href='#' className='hover:text-teal-300 transition-colors'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 24 24'>
            <rect x='2' y='2' width='20' height='20' rx='5' ry='5' fill='none' stroke='currentColor' strokeWidth='2'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' fill='none' stroke='currentColor' strokeWidth='2'/><line x1='17.5' y1='6.5' x2='17.51' y2='6.5' stroke='currentColor' strokeWidth='2'/>
          </svg>
        </a>
        <a href='#' className='hover:text-teal-300 transition-colors'>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Footer
