import carouselImage1 from '../../../assets/carousel-image-1.svg'
import { NavLink } from 'react-router'

const HeroSection = () => {
  return (
    <section className="flex flex-col items-stretch gap-10 bg-amber-700 lg:w-full lg:flex-row lg:justify-between">
      {/*  Hero Content*/}
      <div className="flex w-full flex-col items-start gap-5 bg-green-300 lg:flex-1">
        <p className="text-sm">YOUR NEXT CHAPTER STARTS HERE</p>
        <h1 className="text-4xl font-bold md:text-6xl">
          Good books.
          <br />
          Great company.
        </h1>
        <p className="text-base">
          Discover stories you’ll love, borrow at your own pace, and make room for a little wonder.
        </p>
        <div></div>

        <div className="flex flex-wrap items-center gap-2">
          <p className="flex">Popular:</p>
          <NavLink className="flex" to="/">
            Fiction
          </NavLink>
          <NavLink className="flex" to="/">
            Personal growth
          </NavLink>
          <NavLink className="flex" to="/">
            Mystery
          </NavLink>
        </div>

        <div>
          <p>Free membership&emsp;·&emsp;No late fees&emsp;·&emsp;Everyone welcome</p>
        </div>
      </div>

      {/*Hero Image*/}
      <div className="flex w-full justify-center bg-amber-300 lg:flex-1 lg:justify-end">
        <img
          src={carouselImage1}
          alt="BookTrail library illustration"
          className="h-full w-full max-w-md object-contain"
        />
      </div>
    </section>
  )
}

export default HeroSection
