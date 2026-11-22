import booksUrl from '../data/books.json?url'
import type { book } from '../types/book.ts'

export interface BookFilterCriteria {
  searchQuery: string
  selectedGenre: string
}

/** Fetches the book catalog from books.json. */
export const fetchBooks = async (signal?: AbortSignal): Promise<book[]> => {
  const response = await fetch(booksUrl, { signal })
  if (!response.ok) {
    throw new Error(`Failed to load books (${response.status})`)
  }
  return (await response.json()) as book[]
}

/** Returns sorted unique genres from the catalog prefixed with 'All'. */
export const getBookGenres = (books: book[]): string[] => {
  const unique = Array.from(new Set(books.map((b) => b.genre))).sort()
  return ['All', ...unique]
}

/** Filters books by selected genre and case-insensitive title or author query. */
export const filterBooks = (
  books: book[],
  { searchQuery, selectedGenre }: BookFilterCriteria,
): book[] => {
  const normalizedQuery = searchQuery.trim().toLowerCase()

  return books.filter((item) => {
    const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre
    const matchesQuery =
      normalizedQuery === '' ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.author.toLowerCase().includes(normalizedQuery)

    return matchesGenre && matchesQuery
  })
}
