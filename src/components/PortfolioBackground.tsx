import { motion } from 'framer-motion'
import ShapeGrid from './ShapeGrid'

const PortfolioBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <ShapeGrid
        speed={0.7}
        squareSize={40}
        direction="diagonal"
        borderColor="#2F293A"
        hoverFillColor="#222"
        shape="square"
        hoverTrailAmount={4}
      />
      <motion.div
        animate={{ x: [0, 40, -18, 0], y: [0, -28, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-28 top-[18%] h-72 w-72 rounded-full bg-yellow-400/5 blur-[90px]"
      />
      <motion.div
        animate={{ x: [0, -35, 12, 0], y: [0, 34, -20, 0], scale: [1, 0.95, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-28 bottom-[12%] h-80 w-80 rounded-full bg-amber-300/5 blur-[100px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(8,8,8,0.2)_48%,rgba(8,8,8,0.72)_100%)]" />
    </div>
  )
}

export default PortfolioBackground
