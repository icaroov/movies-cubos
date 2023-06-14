import Image from 'next/image'

import type { MovieWithMoreInfo } from '@/app/shared/types'
import { MovieRating } from '@/app/components/MovieRating'
import { TagList } from '@/app/components/TagList'

import { MovieDetailsInfo } from './components/MovieDetailsInfo'

import styles from './movieDetails.module.scss'

type MovieDetailsProps = {
  movie: MovieWithMoreInfo
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const details = {
    status: {
      title: 'Situação',
      value: movie.infos.status,
    },
    language: {
      title: 'Idioma',
      value: movie.infos.language,
    },
    duration: {
      title: 'Duração',
      value: movie.infos.duration,
    },
    budget: {
      title: 'Orçamento',
      value: movie.infos.budget,
    },
    revenue: {
      title: 'Receita',
      value: movie.infos.revenue,
    },
    profit: {
      title: 'Lucro',
      value: movie.infos.profit,
    },
  }

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
              {Object.entries(details).map(([key, value]) => (
                <MovieDetailsInfo key={key} title={value.title} value={value.value} />
              ))}
            </div>
          </section>

          <section>
            {!!movie.categories?.length && <TagList items={movie.categories} />}
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
