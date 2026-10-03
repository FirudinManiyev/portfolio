import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { MotionConfig } from 'framer-motion'
import AppRoutes from "./routes/AppRoutes"
import PortfolioBackground from "./components/PortfolioBackground"
import ScrollToTop from "./components/ScrollToTop"
import WhatsAppButton from "./components/WhatsAppButton"
import SeoManager from "./components/SeoManager"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen bg-neutral-950 text-white">
        <PortfolioBackground />

        <BrowserRouter>
          <SeoManager />
          <AppRoutes />
          <ScrollToTop />
        </BrowserRouter>

        <WhatsAppButton />

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
