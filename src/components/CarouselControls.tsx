import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

interface CarouselControlsProps {
  activeIndex: number
  ariaLabel: string
  isAutoplayPaused: boolean
  pages: number[]
  onNext: () => void
  onPrevious: () => void
  onSelect: (index: number) => void
  onToggleAutoplay: () => void
}

function CarouselControls({
  activeIndex,
  ariaLabel,
  isAutoplayPaused,
  pages,
  onNext,
  onPrevious,
  onSelect,
  onToggleAutoplay,
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
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-neutral-950/90 text-white shadow-[0_12px_34px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-x-0.5 hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Növbəti slayd"
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-200/70 bg-yellow-300 text-black shadow-[0_12px_34px_rgba(250,204,21,0.24)] transition duration-300 hover:translate-x-0.5 hover:bg-yellow-200 hover:shadow-[0_16px_40px_rgba(250,204,21,0.34)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      <div
        className="absolute left-1/2 top-full mt-4 flex -translate-x-1/2 items-center justify-center gap-1 sm:mt-5 sm:gap-2"
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
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
          >
            <span
              aria-hidden="true"
              className={[
                'h-2.5 rounded-full transition-all duration-300',
                activeIndex === page
                  ? 'w-8 bg-yellow-300 shadow-[0_0_16px_rgba(253,224,71,0.5)]'
                  : 'w-2.5 bg-white/20 group-hover:bg-white/40',
              ].join(' ')}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={onToggleAutoplay}
          aria-label={isAutoplayPaused ? 'Avtomatik keçidi başlat' : 'Avtomatik keçidi dayandır'}
          aria-pressed={isAutoplayPaused}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-neutral-950/90 text-neutral-200 transition hover:border-yellow-300/40 hover:text-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        >
          {isAutoplayPaused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
        </button>
      </div>
    </>
  )
}

export default CarouselControls
