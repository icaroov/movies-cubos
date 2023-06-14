export type Movie = {
  id: number
  title: string
  description: string
  rating: number
  date: string
  categories: string[]
  imageUrl: string
}

type MovieInfo = {
  status: string
  language: string
  duration: number
  budget: number
  revenue: number
  profit: number
}

export type MovieWithMoreInfo = Movie & {
  infos: MovieInfo
}
