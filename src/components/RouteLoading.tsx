function RouteLoading() {
  return (
    <div
      role="status"
      aria-label="Səhifə yüklənir"
      className="relative z-10 flex min-h-[45vh] items-center justify-center"
    >
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-white/10 border-t-yellow-300" />
      <span className="sr-only">Səhifə yüklənir...</span>
    </div>
  )
}

export default RouteLoading
