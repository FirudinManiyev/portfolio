import { useState } from 'react'
import type { FocusEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, ZoomIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certificates } from '../data/certificates'
import { useCarousel } from '../hooks/useCarousel'
import CarouselControls from './CarouselControls'
import ImageLightbox from './ImageLightbox'

const featuredCertificates = certificates.slice(0, 5)

function HomeCertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof featuredCertificates)[number] | null>(null)
  const {
    activeIndex,
    containerRef,
    goNext,
    goPrevious,
    handleScroll,
    isManuallyPaused,
    pages,
    pause,
    pauseInteraction,
    resume,
    resumeInteraction,
    scrollToIndex,
  } = useCarousel({ itemCount: featuredCertificates.length, autoplayDelay: 4800 })

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) resumeInteraction()
  }

  return (
    <section className="relative mt-20 sm:mt-24 lg:mt-28" aria-labelledby="featured-certificates-title">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <h2
              id="featured-certificates-title"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.2em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl"
            >
              <Award className="h-5 w-5" />
              Sertifikatlarım
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-neutral-400 sm:text-base"
          >
            Təhsil və inkişaf yolumdan seçilmiş 5 sertifikat. Slider avtomatik irəliləyir və istənilən sertifikatı tam ölçüdə aça bilərsiniz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-12"
            onMouseEnter={pauseInteraction}
            onMouseLeave={resumeInteraction}
            onFocusCapture={pauseInteraction}
            onBlurCapture={handleBlur}
          >
            <div
              ref={containerRef}
              onScroll={handleScroll}
              role="region"
              aria-roledescription="carousel"
              aria-label="Seçilmiş sertifikatlar"
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {featuredCertificates.map((certificate, index) => (
                <div
                  key={certificate.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${featuredCertificates.length}`}
                  className="shrink-0 basis-full snap-start pr-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.button
                    type="button"
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedCertificate(certificate)}
                    aria-label={`${certificate.title} sertifikatını tam ölçüdə aç`}
                    className="group relative flex h-full min-h-[420px] w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/70 text-left shadow-[0_20px_55px_rgba(0,0,0,0.28)] transition duration-300 hover:border-yellow-300/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent" />
                      <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition group-hover:bg-yellow-300 group-hover:text-black">
                        <ZoomIn className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <span className="w-fit rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-200">
                        {certificate.date}
                      </span>
                      <h3 className="mt-4 text-xl font-bold leading-snug text-white transition-colors group-hover:text-yellow-200">
                        {certificate.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-neutral-400">{certificate.issuer}</p>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-500">{certificate.description}</p>
                    </div>
                  </motion.button>
                </div>
              ))}
            </div>

            <CarouselControls
              activeIndex={activeIndex}
              ariaLabel="Sertifikat slideri"
              isPaused={isManuallyPaused}
              pages={pages}
              onNext={goNext}
              onPause={pause}
              onPlay={resume}
              onPrevious={goPrevious}
              onSelect={scrollToIndex}
            />
          </motion.div>

          <div className="mt-7 flex justify-end">
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
            >
              Bütün sertifikatlara bax
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <ImageLightbox
        src={selectedCertificate?.image ?? null}
        alt={selectedCertificate?.title ?? 'Seçilmiş sertifikat'}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  )
}

export default HomeCertificatesSection
