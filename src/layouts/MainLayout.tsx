import { Suspense } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import RouteLoading from "../components/RouteLoading"

const MainLayout = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <div className="relative z-10 flex min-h-screen flex-col text-white">
      <Header />

      <main
        className={[
          "flex-1",
          isHomePage ? "pt-1 pb-8 sm:pt-4 lg:pt-1" : "py-8",
        ].join(" ")}
      >
        <Suspense fallback={<RouteLoading />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
