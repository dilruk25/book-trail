import { create } from 'zustand'

interface BookFilterState {
  searchQuery: string
  selectedGenre: string
  setSearchQuery: (query: string) => void
  setSelectedGenre: (genre: string) => void
  resetFilters: () => void
}

/** Zustand store managing client-side search and genre filter state for the book catalog. */
export const useBookStore = create<BookFilterState>((set) => ({
  searchQuery: '',
  selectedGenre: 'All',
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedGenre: (selectedGenre) => set({ selectedGenre }),
  resetFilters: () => set({ searchQuery: '', selectedGenre: 'All' }),
}))
