import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import PortfolioBackground from "./components/PortfolioBackground"

function App() {
  return (
    <div className="relative isolate min-h-screen bg-neutral-950 text-white">
      <PortfolioBackground />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App