import Image from 'next/image'
import Link from 'next/link'

import type { Movie } from '@/app/shared/types'

import { TagList } from '../TagList'
import { MovieRating } from '../MovieRating'

import styles from './movieCard.module.scss'

type MovieCardProps = {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <Image src={movie.imageUrl} alt={movie.title} width={250} height={300} />
      </div>

      <div className={styles.infos}>
        <div className={styles.infos__top}>
          <Link href={`/movies/${movie.id}`}>
            <h2 className={styles['infos__top-title']}>{movie.title}</h2>
          </Link>

          <MovieRating className={styles.rating} rating={movie.rating} />
        </div>

        <time title={movie.date} className={styles.date}>
          {movie.date}
        </time>

        <p className={styles.description}>{movie.description}</p>

        <TagList className={styles.tags} items={movie.categories} />
      </div>
    </div>
  )
}

export default MovieCard
