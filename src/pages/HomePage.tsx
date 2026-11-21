import carouselImage1 from '../assets/carousel-image-1.svg'

const HomePage = () => {
  return (
    <>
      <section className="flex flex-row justify-between gap-10 md:flex-row">
        <div className="flex flex-col items-start justify-around bg-green-300 w-4xl p-5">
          <p className="text-sm mb-5">LESS SCROLLING. MORE PAGE-TURNING.</p>
          <h1 className="text-4xl font-bold md:text-6xl  mb-5">
            A world of stories.
            <br />A place for you.
          </h1>
          <p className="text-base  mb-5">
            Borrow a book. Find a new perspective.
            <br />
            Make a little room for wonder, every day.
          </p>
          <div className="mb-5">
            <form className="max-w-md mx-auto mb-5">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-body"
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
                  className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  placeholder="Search"
                  required
                />
                <button
                  type="button"
                  className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-row">
            <p className="flex ml-auto p-2.5">Popular:</p>
            <p className="flex ml-auto p-2.5">Fiction</p>
            <p className="flex ml-auto p-2.5">Personal growth</p>
            <p className="flex ml-auto p-2.5">Mystery</p>
          </div>

          <div>
            <p>Free membership&emsp;·&emsp;No late fees&emsp;·&emsp;Everyone welcome</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={carouselImage1}
            alt="BookTrail library illustration"
            className="h-auto w-full max-w-md items-end bg-amber-300"
          />
        </div>
      </section>
    </>
  )
}

export default HomePage
