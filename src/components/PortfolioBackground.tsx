import LightPillar from "./LightPillar"

const PortfolioBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_48%),linear-gradient(180deg,rgba(8,8,8,0.96),rgba(8,8,8,0.98))]" />

      <div className="absolute inset-0 opacity-90">
        <LightPillar
          topColor="#39402f"
          bottomColor="#ae8f2f"
          intensity={0.6}
          rotationSpeed={0.35}
          glowAmount={0.004}
          pillarWidth={6.8}
          pillarHeight={0.2}
          noiseIntensity={0.1}
          pillarRotation={90}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>
    </div>
  )
}

export default PortfolioBackground