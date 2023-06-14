import { MovieDetails } from '@/app/components/MovieDetails'

import { getMovieById } from '@/app/services/getMovieById'

import styles from './page.module.scss'

type MoviePageParams = {
  movieId: string
}

type MoviePageProps = {
  params: MoviePageParams
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const movie = await getMovieById(params.movieId)

  return (
    <div className={styles.container}>
      <MovieDetails movie={movie} />
    </div>
  )
}

export default MoviePage
