import carouselImage1 from '../assets/carousel-image-1.svg'

const HomePage = () => {
  return (
    <>
      <section className="gap-10 md:flex-row flex flex-row justify-between">
        <div className="bg-green-300 w-4xl p-5 flex flex-col items-start justify-around">
          <p className="text-sm mb-5">LESS SCROLLING. MORE PAGE-TURNING.</p>
          <h1 className="text-4xl font-bold md:text-6xl mb-5">
            A world of stories.
            <br />A place for you.
          </h1>
          <p className="text-base mb-5">
            Borrow a book. Find a new perspective.
            <br />
            Make a little room for wonder, every day.
          </p>
          <div className="mb-5">
            <form className="max-w-md mb-5 mx-auto">
              <div className="relative">
                <div className="inset-y-0 start-0 ps-3 pointer-events-none absolute flex items-center">
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
                  className="p-3 ps-9 bg-neutral-secondary-medium border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body block w-full border"
                  placeholder="Search"
                  required
                />
                <button
                  type="button"
                  className="end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 absolute box-border border border-transparent focus:ring-4 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-row">
            <p className="p-2.5 ml-auto flex">Popular:</p>
            <p className="p-2.5 ml-auto flex">Fiction</p>
            <p className="p-2.5 ml-auto flex">Personal growth</p>
            <p className="p-2.5 ml-auto flex">Mystery</p>
          </div>

          <div>
            <p>Free membership&emsp;·&emsp;No late fees&emsp;·&emsp;Everyone welcome</p>
          </div>
        </div>

        <div className="md:justify-end flex justify-center">
          <img
            src={carouselImage1}
            alt="BookTrail library illustration"
            className="max-w-md bg-amber-300 h-auto w-full items-end"
          />
        </div>
      </section>
    </>
  )
}

export default HomePage
