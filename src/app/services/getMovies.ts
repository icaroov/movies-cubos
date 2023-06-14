import type { Movie, MovieFromApi } from '@/app/shared/types'
import { ENV } from '@/app/shared/constants'

import { formatMovies } from '@/app/utils/formatMovie'

export const getMovies = async (query?: string): Promise<Movie[]> => {
  try {
    const url = query
      ? `${ENV.API_URL}/movie?api_key=${ENV.API_KEY}&language=pt-BR&query=${query}`
      : `${ENV.API_URL}/movie/top_rated?api_key=${ENV.API_KEY}&language=pt-BR`

    const response = await fetch(url)

    if (!response.ok) {
      throw 'Houve um erro ao buscar os filmes.'
    }

    const { results } = (await response.json()) as { results: MovieFromApi[] }

    const movies = formatMovies(results)

    return movies
  } catch (error) {
    if (error instanceof Error) {
      throw error.message
    }

    throw new Error('Houve um erro ao buscar os filmes.')
  }
}
