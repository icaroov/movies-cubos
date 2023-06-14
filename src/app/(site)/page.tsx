import { Search } from '@/app/components/Search'
import { MovieCard } from '@/app/components/MovieCard'
import { Pagination } from '@/app/components/Pagination'

import { getMovies } from '@/app/services/getMovies'

import styles from './home.module.scss'

const Home = async () => {
  const movies = await getMovies()

  return (
    <div className={styles.container}>
      <Search />

      <section className={styles.moviesContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  )
}

export default Home
