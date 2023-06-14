import type { MovieFromApi, MovieWithMoreInfo } from '@/app/shared/types'
import { ENV } from '@/app/shared/constants'

import { formatMovieWithMoreInfo } from '@/app/utils/formatMovie'

export const getMovieById = async (movieId: string): Promise<MovieWithMoreInfo> => {
  try {
    const response = await fetch(`${ENV.API_URL}/movie/${movieId}?api_key=${ENV.API_KEY}&language=pt-BR`)

    if (!response.ok) {
      throw 'Houve um erro ao buscar o filme.'
    }

    const data = (await response.json()) as MovieFromApi

    const movie = formatMovieWithMoreInfo(data)

    return movie
  } catch (error) {
    if (error instanceof Error) {
      throw error.message
    }

    throw new Error('Houve um erro ao buscar o filme.')
  }
}
