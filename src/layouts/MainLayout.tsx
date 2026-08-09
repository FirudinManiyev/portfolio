import { Suspense } from "react"
import { useLocation, useOutlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import RouteLoading from "../components/RouteLoading"
import PageTransition from "../components/PageTransition"
import ScrollProgress from "../components/ScrollProgress"

const MainLayout = () => {
  const location = useLocation()
  const outlet = useOutlet()
  const isHomePage = location.pathname === "/"

  return (
    <div className="relative z-10 flex min-h-screen flex-col text-white">
      <ScrollProgress />
      <Header />

      <main
        className={[
          "flex-1",
          isHomePage ? "pt-1 pb-8 sm:pt-4 lg:pt-1" : "py-8",
        ].join(" ")}
      >
        <Suspense fallback={<RouteLoading />}>
          <PageTransition>{outlet}</PageTransition>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
