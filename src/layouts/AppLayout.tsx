import Navbar from '../components/layout/Navbar.tsx'
import Footer from '../components/layout/Footer.tsx'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-amber-700">
        <Navbar />
      </header>

      <main className="w-full flex-1 bg-amber-200 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

      <footer className="bg-amber-700">
        <Footer />
      </footer>
    </div>
  )
}

export default AppLayout
