import styles from './search.module.scss'

type SearchProps = {
  onChange: (value: string) => void
  initialValue?: string
}

const Search = ({ onChange, initialValue }: SearchProps) => {
  return (
    <div className={styles.search}>
      <input
        value={initialValue}
        type='search'
        placeholder='Busque um filme por nome, ano ou gênero...'
        autoComplete='off'
        aria-autocomplete='list'
        autoCorrect='off'
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default Search
