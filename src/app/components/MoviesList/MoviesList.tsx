'use client'

import { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import Skeleton from 'react-loading-skeleton'

import { Search } from '@/app/components/Search'
import { MovieCard } from '@/app/components/MovieCard'
import { Pagination } from '@/app/components/Pagination'

import { getMovies } from '@/app/services/getMovies'
import useDebounce from '@/app/hooks/useDebounce'

import type { MoviesWithPagination } from '@/app/shared/types'

import styles from './moviesList.module.scss'

type MoviesListProps = {
  data: MoviesWithPagination
}

const MoviesList = ({ data: initialData }: MoviesListProps) => {
  const [inputValue, setInputValue] = useState('')
  const [currentPage, setCurrentPage] = useState(initialData?.currentPage ?? 1)

  const debouncedValue = useDebounce(inputValue)

  const { data, error, isLoading } = useSWR(
    [currentPage, debouncedValue],
    ([currentPage, debouncedValue]) => getMovies(currentPage, debouncedValue),
    {
      initialData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
    }
  )

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
      <Search initialValue={inputValue} onChange={(value) => setInputValue(value)} />

      {isLoading ? (
        <section className={styles.moviesContainer}>
          <Skeleton className={styles.skeleton} count={20} highlightColor='#cac6c6' />
        </section>
      ) : (
        <>
          <section className={styles.moviesContainer}>
            {data?.movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </section>

          <div className={styles.paginationContainer}>
            <Pagination currentPage={currentPage} totalPages={data?.totalPages} onPageChange={setCurrentPage} />
          </div>
        </>
      )}
    </div>
  )
}

export default MoviesList
