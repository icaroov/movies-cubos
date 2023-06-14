import { MovieDetails } from '@/app/components/MovieDetails'
import { MovieWithMoreInfo } from '@/app/shared/types'

import styles from './page.module.scss'

type MoviePageParams = {
  movieId: string
}

const movie: MovieWithMoreInfo = {
  id: 201,
  title: 'The Godfather',
  description:
    'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  date: '1972-03-24',
  rating: 9.2,
  imageUrl:
    'https://images.unsplash.com/photo-1686647211244-915dfbe75a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  categories: ['Crime', 'Drama'],
  infos: {
    status: 'Released',
    language: 'en',
    budget: 6000000,
    revenue: 245066411,
    profit: 239066411,
    duration: 175,
  },
}

const MoviePage = ({ params }: { params: MoviePageParams }) => {
  return (
    <div className={styles.container}>
      <MovieDetails movie={movie} />
    </div>
  )
}

export default MoviePage
