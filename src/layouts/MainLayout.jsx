import { Outlet } from 'react-router-dom'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

export default function MainLayout() {
  return (
    <>
      <Seo />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="flex-1 pt-16 lg:pt-[4.5rem]" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
