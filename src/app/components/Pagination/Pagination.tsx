import PaginationItem from './components/PaginationItem'

import styles from './pagination.module.scss'

type PaginationProps = {
  currentPage: number | undefined
  totalPages: number | undefined
  onPageChange: (page: number) => void
}

const siblingsCount = 2

const Pagination = ({ currentPage = 1, totalPages = 0, onPageChange }: PaginationProps) => {
  const perPage = 20

  // TMDB returns a maximum of 500 pages
  const lastPage = Math.floor(totalPages / perPage) > 500 ? 500 : Math.floor(totalPages / perPage)

  if (lastPage <= 1) return null

  const followingPages = Math.min(currentPage + siblingsCount, lastPage)

  const previousPages = currentPage > 1 ? generatePages(currentPage - 1 - siblingsCount, currentPage - 1) : []

  const nextPages = currentPage < lastPage ? generatePages(currentPage, followingPages) : []

  return (
    <div role='navigation' aria-label='pagination' className={styles.container}>
      <div className={styles.buttonsContainer}>
        {/* Render "First item" and "..." if needed */}
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />

            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}

        {/* Render previous pages */}
        {previousPages.length > 0 &&
          previousPages.map((page) => <PaginationItem key={page} onPageChange={onPageChange} pageNumber={page} />)}

        {/* Render current page */}
        <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} isCurrent />

        {/* Render next pages */}
        {nextPages.length > 0 &&
          nextPages.map((page) => <PaginationItem key={page} onPageChange={onPageChange} pageNumber={page} />)}

        {/* Render "..." and "Last item" if needed */}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}

            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </div>
    </div>
  )
}

const generatePages = (from: number, to: number) => {
  return [...new Array(to - from)].map((_, index) => from + index + 1).filter((page) => page > 0)
}

export default Pagination
