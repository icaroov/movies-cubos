import type { Movie, MovieFromApi, MovieWithMoreInfo } from '../shared/types'

import { ENV } from '../shared/constants'

export const formatMovies = (movies: MovieFromApi[]): Movie[] => {
  const formatedMovies: Movie[] = movies.map((movie: MovieFromApi) => {
    const formatedDate = new Date(movie.release_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      imageUrl: `${ENV.IMAGE_URL}/${movie.poster_path}`,
      categories: [],
      rating: movie.vote_average,
      date: formatedDate,
    }
  })

  return formatedMovies
}

export const formatMovieWithMoreInfo = (movie: MovieFromApi): MovieWithMoreInfo => {
  const formatedDate = new Date(movie.release_date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const genres = movie.genres?.map((genre) => genre.name)

  const formatedMovie: MovieWithMoreInfo = {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    imageUrl: `${ENV.IMAGE_URL}/${movie.poster_path}`,
    categories: genres || [],
    rating: movie.vote_average,
    date: formatedDate,
    infos: {
      status: movie.status,
      language: movie.original_language,
      duration: formatTime(movie.runtime),
      budget: formatCurrency(movie.budget),
      revenue: formatCurrency(movie.revenue),
      profit: formatCurrency((movie.revenue || 0) - (movie.budget || 0)),
    },
  }

  return formatedMovie
}

const formatCurrency = (value: number | undefined): string => {
  return Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(value || 0)
}

const formatTime = (minutes: number | undefined) => {
  if (!minutes) return ''

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  return `${hours}h ${mins}min`
}
