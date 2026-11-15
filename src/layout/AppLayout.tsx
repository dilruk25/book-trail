import Navbar from '../components/layout/Navbar.tsx'
import Footer from '../components/layout/Footer.tsx'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default AppLayout
