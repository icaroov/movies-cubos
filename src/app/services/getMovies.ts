import type { MoviesFromApiWithPagination, MoviesWithPagination } from '@/app/shared/types'
import { ENV } from '@/app/shared/constants'

import { formatMovies } from '@/app/utils/formatMovie'

export const getMovies = async (query?: string, page?: number): Promise<MoviesWithPagination> => {
  try {
    const url = query
      ? `${ENV.API_URL}/search/movie?query=${query}&api_key=${ENV.API_KEY}&language=pt-BR&include_adult=false`
      : `${ENV.API_URL}/discover/movie?api_key=${ENV.API_KEY}&language=pt-BR&page=${page || 1}&sort_by=popularity.desc`

    const response = await fetch(url, {
      next: {
        revalidate: 3600, // 1h
      },
    })

    if (!response.ok) {
      throw new Error('Houve um erro ao buscar os filmes.')
    }

    const data = (await response.json()) as MoviesFromApiWithPagination

    const movies = await formatMovies(data.results)

    return {
      currentPage: data.page,
      totalPages: data.total_pages,
      movies,
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Houve um erro ao buscar os filmes.')
  }
}
