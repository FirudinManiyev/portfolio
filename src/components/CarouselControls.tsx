import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

interface CarouselControlsProps {
  activeIndex: number
  ariaLabel: string
  isPaused: boolean
  pages: number[]
  onNext: () => void
  onPause: () => void
  onPlay: () => void
  onPrevious: () => void
  onSelect: (index: number) => void
}

function CarouselControls({
  activeIndex,
  ariaLabel,
  isPaused,
  pages,
  onNext,
  onPause,
  onPlay,
  onPrevious,
  onSelect,
}: CarouselControlsProps) {
  return (
    <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
      <div className="flex items-center gap-2" role="group" aria-label={`${ariaLabel} səhifələri`}>
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

      <div className="flex items-center gap-2" role="group" aria-label={`${ariaLabel} idarəetməsi`}>
        <button
          type="button"
          onClick={isPaused ? onPlay : onPause}
          aria-label={isPaused ? 'Avtomatik keçidi başladın' : 'Avtomatik keçidi dayandırın'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition hover:border-yellow-300/35 hover:bg-yellow-300/10 hover:text-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Əvvəlki slayd"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-x-0.5 hover:border-yellow-300/35 hover:bg-yellow-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Növbəti slayd"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-300/35 bg-yellow-300 text-black shadow-[0_10px_28px_rgba(250,204,21,0.18)] transition hover:translate-x-0.5 hover:bg-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default CarouselControls
