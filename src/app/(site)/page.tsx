import type { Movie } from '@/app/shared/types'

import { Search } from '@/app/components/Search'
import { MovieCard } from '@/app/components/MovieCard'

import styles from './home.module.scss'

const movies: Movie[] = [
  {
    id: 1,
    title: 'O Poderoso Chefão',
    description:
      'Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola.',
    rating: 9.2,
    date: '24 de março de 1972',
    categories: ['Crime', 'Drama'],
    imageUrl:
      'https://images.unsplash.com/photo-1686647211244-915dfbe75a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 2,
    title: 'O Poderoso Chefão: O Poderoso II',
    description:
      'Filme de 1972 dirigido por Francis Ford Coppola, produzido por Albert S. Ruddy a partir de roteiro de Mario Puzo e Coppola. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil nemo odit, quae, impedit vitae id perferendis temporibus iure ad ratione incidunt placeat dolorum. Architecto vitae aliquam fugit nostrum? Nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil nemo odit, quae, impedit vitae id perferendis temporibus iure ad ratione incidunt placeat dolorum. Architecto vitae aliquam fugit nostrum? Nisi.',
    rating: 9.2,
    date: '24 de março de 1972',
    categories: ['Crime', 'Drama', 'Action'],
    imageUrl:
      'https://images.unsplash.com/photo-1686647211244-915dfbe75a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
]

const Home = () => {
  return (
    <main className={styles.main}>
      <Search />

      <section className={styles.movies__container}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  )
}

export default Home
