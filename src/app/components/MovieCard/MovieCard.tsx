import Image from 'next/image'
import Link from 'next/link'

import type { Movie } from '@/app/shared/types'

import './movie-card.scss'

type MovieCardProps = {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const ratingWithPercentage = `${movie.rating * 10}%`

  return (
    <div className='container'>
      <div className='image__container'>
        <Image src={movie.imageUrl} alt={movie.title} width={250} height={300} />
      </div>

      <div className='infos'>
        <div className='infos__top'>
          <Link href={`/movies/${movie.id}`}>
            <h2 className='infos__top-title'>{movie.title}</h2>
          </Link>

          <span className='infos__top-rating'>{ratingWithPercentage}</span>
        </div>

        <span className='date'>{movie.date}</span>

        <p className='description'>{movie.description}</p>

        <div className='tags'>
          {movie.categories.map((category) => (
            <span key={category} className='tag'>
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
