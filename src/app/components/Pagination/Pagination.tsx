import styles from './pagination.module.scss'

type PaginationProps = {
  currentPage: number | undefined
  totalPages: number | undefined
  perPage?: number
  onPageChange?: (page: number) => void
}

const Pagination = ({ currentPage = 1, totalPages = 0, perPage = 5, onPageChange }: PaginationProps) => {
  const lastPage = Math.ceil(totalPages / perPage)

  if (lastPage <= 1) return null

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange && onPageChange(newPage)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <strong>{currentPage}</strong> de <strong>{lastPage}</strong>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className='button'
          type='button'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        <button
          className='button'
          type='button'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          Próxima
        </button>
      </div>
    </div>
  )
}

export default Pagination
