import Navbar from '../components/layout/Navbar.tsx'
import Footer from '../components/layout/Footer.tsx'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default AppLayout
