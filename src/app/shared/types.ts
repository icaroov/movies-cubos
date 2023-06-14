type Genre = {
  id?: number
  name: string
}

export type MovieFromApi = {
  id?: number
  title: string
  poster_path: string
  overview: string
  vote_average: number
  release_date: string
  budget?: number
  status?: string
  revenue?: number
  genres?: Genre[]
  original_language?: string
  runtime?: number
}

export type Movie = {
  id?: number
  title: string
  description: string
  rating: number
  date: string
  imageUrl: string
  categories?: string[]
}

type MovieInfo = {
  status: string
  language: string
  duration: string
  budget: string
  revenue: string
  profit: string
}

export type MovieWithMoreInfo = Movie & {
  infos: Partial<MovieInfo>
}
