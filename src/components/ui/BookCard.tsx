import { Link } from 'react-router'
import type { book } from '../../types/book.ts'

const BookCard = ({
  id,
  title,
  author,
  genre,
  description,
  publishedYear,
  totalCopies,
  availableCopies,
  rating,
}: book) => {
  const isAvailable = availableCopies > 0

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition hover:shadow-md">
      {/*Adds consistent vertical spacing between sections*/}
      <div className="space-y-3">
        {/*Top section - Genre + Rating*/}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            {genre}
          </span>
          <span className="text-xs font-semibold text-gray-700">★ {rating.toFixed(1)}</span>
        </div>

        {/*Middle section - Title + Author*/}
        <div>
          <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">
            {author} · {publishedYear}
          </p>
        </div>

        {/*Middle section - Short Book Description*/}
        <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
      </div>

      {/*------------------------------------------------------------------------------------------------------------------*/}
      {/*Bottom Section - Availability + View Details*/}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <span
          className={`text-xs font-medium ${isAvailable ? 'text-emerald-700' : 'text-red-600'}`}
        >
          {isAvailable ? `${availableCopies}/${totalCopies} available` : 'Out of stock'}
        </span>

        <Link
          to={`/books/${id}`}
          className="text-xs font-semibold text-amber-700 hover:text-amber-900 hover:underline"
        >
          View details →
        </Link>
      </div>
    </article>
  )
}

export default BookCard
