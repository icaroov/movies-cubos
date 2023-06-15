import { MoviesList } from '@/app/components/MoviesList'

import { getMovies } from '@/app/services/getMovies'

import styles from './home.module.scss'

const Home = async () => {
  const movies = await getMovies()

  return (
    <div className={styles.container}>
      <MoviesList movies={movies} />
    </div>
  )
}

export default Home
