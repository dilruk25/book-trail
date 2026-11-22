import { useMemo } from 'react'
import BookCard from '../components/ui/BookCard.tsx'
import { useBooksQuery } from '../hooks/useBooksQuery.ts'
import { filterBooks, getBookGenres } from '../services/bookService.ts'
import { useBookStore } from '../store/useBookStore.ts'

const BookListsPage = () => {
  const { data: books = [], isLoading, isError, error } = useBooksQuery()
  const { searchQuery, selectedGenre, setSearchQuery, setSelectedGenre, resetFilters } =
    useBookStore()

  const genres = useMemo(() => getBookGenres(books), [books])

  const filteredBooks = useMemo(
    () => filterBooks(books, { searchQuery, selectedGenre }),
    [books, searchQuery, selectedGenre],
  )

  if (isLoading) {
    return (
      <section className="py-10 text-center">
        <p className="text-sm text-gray-600">Loading books...</p>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="py-10 text-center">
        <p className="text-sm font-medium text-red-600">
          {error instanceof Error ? error.message : 'Unable to load books.'}
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Books</h1>
          <p className="text-sm text-gray-700">
            Showing {filteredBooks.length} of {books.length} books
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title or author..."
            className="rounded-lg border bg-white px-3 py-1.5 text-sm focus:border-amber-700 focus:outline-none"
          />

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            aria-label="Filter by genre"
            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:outline-none"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white/70 py-12 text-center">
          <p className="text-sm text-gray-600">No books match your filters.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-2 text-sm font-medium text-amber-800 hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.map((item) => (
            <BookCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default BookListsPage
