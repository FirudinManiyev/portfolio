import { BrowserRouter } from "react-router-dom"
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

      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}

export default App