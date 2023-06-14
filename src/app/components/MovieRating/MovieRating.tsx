import styles from './movieRating.module.scss'

type MovieRatingProps = {
  rating: number
  className?: string
}

const MovieRating = ({ rating, className }: MovieRatingProps) => {
  const ratingWithPercentage = (rating * 10).toFixed(0) + '%'

  return <span className={`${styles.rating} ${className}`}>{ratingWithPercentage}</span>
}

export default MovieRating
