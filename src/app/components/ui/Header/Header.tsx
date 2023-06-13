'use client'

import { useRouter, usePathname } from 'next/navigation'

import styles from './header.module.scss'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const showBackButton = pathname !== '/'

  const handleGoBack = () => router.back()

  return (
    <header className={styles.header}>
      {showBackButton && <p onClick={handleGoBack}>Voltar</p>}

      <Link href='/'>
        <span>Movies</span>
      </Link>
    </header>
  )
}

export default Header
