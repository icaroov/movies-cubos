'use client'

import styles from './paginationItem.module.scss'

type PaginationLinkProps = {
  pageNumber: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

const PaginationItem = ({ pageNumber, isCurrent = false, onPageChange }: PaginationLinkProps) => {
  if (isCurrent) {
    return (
      <button className={styles.button} aria-label={`Página atual, página ${pageNumber}`} aria-current='true' disabled>
        {pageNumber}
      </button>
    )
  }

  return (
    <button
      className={styles.button}
      aria-label={`Ir para a página ${pageNumber}`}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  )
}

export default PaginationItem
