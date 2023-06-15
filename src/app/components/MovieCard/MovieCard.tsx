'use cliente'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { Movie } from '@/app/shared/types'

import { TagList } from '@/app/components/TagList'
import { MovieRating } from '@/app/components/MovieRating'

import styles from './movieCard.module.scss'

type MovieCardProps = {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [error, setError] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={error ? '/assets/no-image.png' : movie.imageUrl || '/assets/no-image.png'}
          alt={movie.title}
          onError={() => setError(true)}
          fill
        />
      </div>

      <div className={styles.infos}>
        <div className={styles.infosTop}>
          <Link href={`/movies/${movie.id}`}>
            <h2 className={styles.title}>{movie.title}</h2>
          </Link>

          <MovieRating className={styles.rating} rating={movie.rating} />
        </div>

        <time title={movie.date} className={styles.date}>
          {movie.date}
        </time>

        {movie.description ? (
          <p className={styles.description}>{movie.description}</p>
        ) : (
          <p className={styles.description}>Sem descrição.</p>
        )}

        {!!movie.categories?.length && <TagList className={styles.tags} items={movie.categories} />}
      </div>
    </div>
  )
}

export default MovieCard
