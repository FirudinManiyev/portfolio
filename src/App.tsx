import { useCallback, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import AppRoutes from "./routes/AppRoutes"
import PortfolioBackground from "./components/PortfolioBackground"
import ScrollToTop from "./components/ScrollToTop"
import WhatsAppButton from "./components/WhatsAppButton"
import LoadingAnimation from "./components/LoadingAnimation"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const finishLoading = useCallback(() => setIsLoading(false), [])

  return (
    <MotionConfig reducedMotion="user">
      <div
        aria-busy={isLoading}
        className="relative isolate min-h-screen bg-neutral-950 text-white"
      >
        <PortfolioBackground />

        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingAnimation onComplete={finishLoading} />
          )}
        </AnimatePresence>

        <div inert={isLoading ? true : undefined} aria-hidden={isLoading}>
          <BrowserRouter>
            <AppRoutes />
            <ScrollToTop />
          </BrowserRouter>

          <WhatsAppButton />
        </div>

        <Toaster
          position="top-right"
          toastOptions={{
            className: '!border !border-white/10 !bg-neutral-900 !text-white shadow-2xl',
            duration: 4000,
          }}
        />

      </div>
    </MotionConfig>
  )
}

export default App
