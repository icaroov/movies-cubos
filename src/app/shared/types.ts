export type Genre = {
  id: number
  name: string
}

export type MovieFromApi = {
  id?: number
  title: string
  poster_path?: string
  backdrop_path?: string
  overview: string
  vote_average: number
  release_date: string
  budget?: number
  status?: string
  revenue?: number
  genres?: Genre[]
  original_language?: string
  runtime?: number
  genre_ids?: number[]
  videos?: {
    results: Video[]
  }
}

export type MoviesFromApiWithPagination = {
  page: number
  results: MovieFromApi[]
  total_pages: number
  total_results: number
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

export type Video = {
  id: string
  key: string
  name: string
  site: string
  official: boolean
  size: number
}

export type MovieWithMoreInfo = Movie & {
  infos: Partial<MovieInfo>
  videos?: Video[]
}

export type MoviesWithPagination = {
  currentPage: number
  totalPages: number
  movies: Movie[]
}
