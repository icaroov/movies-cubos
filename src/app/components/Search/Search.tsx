import styles from './search.module.scss'

const Search = () => {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Busque um filme por nome, ano ou gênero...' />
    </div>
  )
}

export default Search
