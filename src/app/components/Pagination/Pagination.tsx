type PaginationProps = {
  page: number
  totalPages: number
  setPage?: (page: number) => void
}

const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  return <div>pagination</div>
}

export default Pagination
