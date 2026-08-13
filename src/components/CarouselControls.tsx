import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselControlsProps {
  activeIndex: number
  ariaLabel: string
  pages: number[]
  onNext: () => void
  onPrevious: () => void
  onSelect: (index: number) => void
}

function CarouselControls({
  activeIndex,
  ariaLabel,
  pages,
  onNext,
  onPrevious,
  onSelect,
}: CarouselControlsProps) {
  return (
    <>
      <div
        data-testid="carousel-side-controls"
        className="pointer-events-none absolute inset-y-0 -left-3 -right-3 z-20 flex items-center justify-between sm:-left-5 sm:-right-5 lg:-left-6 lg:-right-6"
        role="group"
        aria-label={`${ariaLabel} istiqamət idarəetməsi`}
      >
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Əvvəlki slayd"
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-neutral-950/90 text-white shadow-[0_12px_34px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-x-0.5 hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Növbəti slayd"
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-200/70 bg-yellow-300 text-black shadow-[0_12px_34px_rgba(250,204,21,0.24)] transition duration-300 hover:translate-x-0.5 hover:bg-yellow-200 hover:shadow-[0_16px_40px_rgba(250,204,21,0.34)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      <div
        className="absolute left-1/2 top-full mt-6 flex -translate-x-1/2 items-center justify-center gap-2"
        role="group"
        aria-label={`${ariaLabel} səhifələri`}
      >
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onSelect(page)}
            aria-label={`${page + 1}-ci slayda keç`}
            aria-current={activeIndex === page ? 'true' : undefined}
            className={[
              'h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300',
              activeIndex === page
                ? 'w-8 bg-yellow-300 shadow-[0_0_16px_rgba(253,224,71,0.5)]'
                : 'w-2.5 bg-white/20 hover:bg-white/40',
            ].join(' ')}
          />
        ))}
      </div>
    </>
  )
}

export default CarouselControls
