import type { Genre } from '@/app/shared/types'
import { ENV } from '@/app/shared/constants'

export const getGenresByIds = async (
  genresIds: number[]
): Promise<{
  categories: string[]
}> => {
  try {
    const response = await fetch(`${ENV.API_URL}/genre/movie/list?api_key=${ENV.API_KEY}&language=pt-BR`)

    if (!response.ok) {
      throw 'Houve um erro ao buscar as categorias.'
    }

    const data = (await response.json()) as { genres: Genre[] }

    const genres = data.genres.filter((genre) => genresIds.includes(genre.id)).map((genre) => genre.name)

    return { categories: genres }
  } catch (error) {
    if (error instanceof Error) {
      throw error.message
    }

    throw new Error('Houve um erro ao buscar as categorias.')
  }
}
