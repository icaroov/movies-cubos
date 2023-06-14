import Image from 'next/image'

import type { MovieWithMoreInfo } from '@/app/shared/types'

import { MovieDetailsInfo } from './components/MovieDetailsInfo'
import { TagList } from '../TagList'
import { MovieRating } from '../MovieRating'

import styles from './movieDetails.module.scss'

const details = [
  {
    title: 'Situação',
    value: 'Assistido',
  },
  {
    title: 'Nota',
    value: '10',
  },
  {
    title: 'Data de lançamento',
    value: '10/10/2020',
  },
  {
    title: 'Duração',
    value: '2h 30min',
  },
  {
    title: 'Orçamento',
    value: '$160.000.000,00',
  },
]

type MovieDetailsProps = {
  movie: MovieWithMoreInfo
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.topInfos}>
        <h1>{movie.title}</h1>
        <time title={movie.date}>{movie.date}</time>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <section>
            <h3>Sinopse</h3>
            <p>{movie.description}</p>
          </section>

          <section>
            <h3>Informações</h3>

            <div className={styles.detailsInfos}>
              {details.map((detail, index) => (
                <MovieDetailsInfo key={`${detail.title}--${index}`} title={detail.title} value={detail.value} />
              ))}
            </div>
          </section>

          <section>
            <TagList items={movie.categories} />
            <MovieRating className={styles.rating} rating={movie.rating} />
          </section>
        </div>

        <div className={styles.imageContainer}>
          <Image src={movie.imageUrl} alt={movie.title} width={300} height={500} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
