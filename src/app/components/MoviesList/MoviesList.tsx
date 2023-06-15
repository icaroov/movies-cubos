'use client'

import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import { Search } from '@/app/components/Search'
import { MovieCard } from '@/app/components/MovieCard'
import { Pagination } from '@/app/components/Pagination'

import { getMovies } from '@/app/services/getMovies'
import useDebounce from '@/app/hooks/useDebounce'

import type { Movie } from '@/app/shared/types'

import styles from './moviesList.module.scss'

type MoviesListProps = {
  movies: Movie[]
}

const MoviesList = ({ movies: initialData }: MoviesListProps) => {
  const [inputValue, setInputValue] = useState('')
  const [movies, setMovies] = useState<Movie[]>(initialData)

  const debouncedValue = useDebounce(inputValue)

  const { data, error, isLoading } = useSWR(debouncedValue ?? null, getMovies)

  useEffect(() => {
    if (debouncedValue.length > 0) {
      if (data) {
        setMovies(data)
      } else {
        setMovies([])
      }
    } else {
      setMovies(initialData)
    }
  }, [data, debouncedValue, initialData])

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <Image src='/assets/error.gif' width={350} height={300} alt='Erro' />
        <span>Erro ao carregar os filmes.</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Search onChange={(value) => setInputValue(value)} />

      {isLoading ? (
        <div className={styles.spinnerContainer}>
          <div className='spinner' />
        </div>
      ) : (
        <>
          <section className={styles.moviesContainer}>
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </section>

          <div className={styles.paginationContainer}>
            <Pagination page={1} totalPages={10} />
          </div>
        </>
      )}
    </div>
  )
}

export default MoviesList
