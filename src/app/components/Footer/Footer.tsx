import Link from 'next/link'

import './footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const link = (
    <Link href='https://github.com/icaroov' target='_blank' rel='noopener noreferrer'>
      Ícaro Oliveira
    </Link>
  )

  return (
    <footer className='footer'>
      <p>
        Feito com ❤️ por {link} - {currentYear}
      </p>
    </footer>
  )
}

export default Footer
