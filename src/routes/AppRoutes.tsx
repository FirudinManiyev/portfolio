import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Skills = lazy(() => import("../pages/Skills"))
const Projects = lazy(() => import("../pages/Projects"))
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"))
const Certificates = lazy(() => import("../pages/Certificates"))
const Education = lazy(() => import("../pages/Education"))
const Contact = lazy(() => import("../pages/Contact"))
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
