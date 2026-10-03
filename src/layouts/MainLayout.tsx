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
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[1000] -translate-y-24 rounded-xl bg-yellow-300 px-4 py-3 font-semibold text-black shadow-xl transition-transform focus:translate-y-0"
      >
        Əsas məzmuna keç
      </a>
      <ScrollProgress />
      <Header />

      <main
        id="main-content"
        tabIndex={-1}
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
