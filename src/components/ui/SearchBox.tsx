const SearchBox = () => {
  return (
    <form className="mx-auto max-w-md">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 inset-s-0 flex items-center ps-3">
          <svg
            className="text-body h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border p-3 ps-9 text-sm shadow-xs"
          placeholder="Search"
          required
        />
        <button
          type="button"
          className="bg-brand hover:bg-brand-strong focus:ring-brand-medium absolute inset-e-1.5 bottom-1.5 box-border rounded border border-transparent px-3 py-1.5 text-xs leading-5 font-medium text-white shadow-xs focus:ring-4 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBox
