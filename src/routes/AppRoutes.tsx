import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import RouteLoading from "../components/RouteLoading"

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Skills = lazy(() => import("../pages/Skills"))
const Projects = lazy(() => import("../pages/Projects"))
const Certificates = lazy(() => import("../pages/Certificates"))
const Education = lazy(() => import("../pages/Education"))
const Contact = lazy(() => import("../pages/Contact"))
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))

const AppRoutes = () => {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Routes>
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
    </Suspense>
  )
}

export default AppRoutes
