import { Metadata } from 'next'

import { MovieDetails } from '@/app/components/MovieDetails'
import { getMovieById } from '@/app/services/getMovieById'

import styles from './page.module.scss'

type MoviePageParams = {
  movieId: string
}

type MoviePageProps = {
  params: MoviePageParams
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  const movie = await getMovieById(params.movieId)

  return {
    title: `${movie.title} | Filme`,
    description: movie.description,
  }
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
