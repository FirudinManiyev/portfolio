import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden text-white">
      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout