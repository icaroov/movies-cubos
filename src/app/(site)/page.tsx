import { MoviesList } from '@/app/components/MoviesList'

import { getMovies } from '@/app/services/getMovies'

import styles from './home.module.scss'

const Home = async () => {
  const data = await getMovies()

  return (
    <div className={styles.container}>
      <MoviesList data={data} />
    </div>
  )
}

export default Home
