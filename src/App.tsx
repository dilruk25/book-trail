import './App.css'
import AppLayout from './layouts/AppLayout.tsx'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import BookListsPage from './pages/BookListsPage.tsx'
import BookDetailPage from './pages/BookDetailsPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import AdminDashboardPage from './pages/AdminDashboardPage.tsx'

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookListsPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Route>
    </Routes>
  )
}

export default App
