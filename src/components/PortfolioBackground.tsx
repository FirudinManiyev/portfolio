import ShapeGrid from './ShapeGrid'

const PortfolioBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-auto fixed inset-0 z-0 overflow-hidden">
      <ShapeGrid
        speed={0.7}
        squareSize={40}
        direction="diagonal"
        borderColor="#2F293A"
        hoverFillColor="#222"
        shape="square"
        hoverTrailAmount={4}
      />
    </div>
  )
}

export default PortfolioBackground