import { useQuery } from '@tanstack/react-query'
import { fetchBooks } from '../services/bookService.ts'

export const useBooksQuery = () => {
  return useQuery({
    queryKey: ['books'],
    queryFn: ({ signal }) => fetchBooks(signal),
  })
}
