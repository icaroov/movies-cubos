'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

import './header.scss'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const showBackButton = pathname !== '/'

  const handleGoBack = () => router.back()

  return (
    <header className='header'>
      {showBackButton && <p onClick={handleGoBack}>Voltar</p>}

      <Link href='/'>
        <span>Movies</span>
      </Link>
    </header>
  )
}

export default Header