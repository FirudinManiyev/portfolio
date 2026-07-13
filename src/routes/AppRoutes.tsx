import { Routes, Route, useLocation } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Certificates from "../pages/Certificates"
import Contact from "../pages/Contact"
import NotFoundPage from "../pages/NotFoundPage"
import Education from "../pages/Education"
import PageTransition from "../components/PageTransition"

const AppRoutes = () => {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageTransition>
  )
}

export default AppRoutes