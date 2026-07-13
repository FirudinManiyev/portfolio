import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import AppRoutes from "./routes/AppRoutes"
import PortfolioBackground from "./components/PortfolioBackground"
import ScrollToTop from "./components/ScrollToTop"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <div className="relative isolate min-h-screen bg-neutral-950 text-white">
      <PortfolioBackground />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111827',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.12)',
          },
        }}
      />

      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}

export default App