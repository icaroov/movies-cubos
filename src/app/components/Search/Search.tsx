import styles from './search.module.scss'

const Search = () => {
  return (
    <div className={styles.search}>
      <input type='search' placeholder='Busque um filme por nome, ano ou gênero...' autoComplete='off' />
    </div>
  )
}

export default Search
