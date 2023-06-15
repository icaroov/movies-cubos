import Link from 'next/link'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <span>Movies</span>
      </Link>
    </header>
  )
}

export default Header
