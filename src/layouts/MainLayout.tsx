import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <div className="relative z-10 min-h-screen text-white">
      <Header />

      <main
        className={[
          "flex-1 px-4 sm:px-6 lg:px-8",
          isHomePage ? "pt-1 pb-8 sm:pt-4 lg:pt-1" : "py-8",
        ].join(" ")}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout