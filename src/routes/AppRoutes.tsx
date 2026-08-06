import { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import PageTransition from "../components/PageTransition"
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
  const location = useLocation()

  return (
    <Suspense fallback={<RouteLoading />}>
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
    </Suspense>
  )
}

export default AppRoutes
