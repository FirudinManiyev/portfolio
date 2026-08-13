import type { FocusEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useCarousel } from '../hooks/useCarousel'
import CarouselControls from './CarouselControls'
import ProjectCard from './ProjectCard'

const featuredProjects = projects.slice(0, 5)

function HomeProjectsSection() {
  const {
    activeIndex,
    containerRef,
    goNext,
    goPrevious,
    handleScroll,
    pages,
    pauseInteraction,
    resumeInteraction,
    scrollToIndex,
  } = useCarousel({ itemCount: featuredProjects.length, autoplayDelay: 5200 })

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) resumeInteraction()
  }

  return (
    <section className="relative mt-20 sm:mt-24 lg:mt-28" aria-labelledby="featured-projects-title">
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
              id="featured-projects-title"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.2em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl"
            >
              <Layers3 className="h-5 w-5" />
              Seçilmiş layihələr
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-neutral-400 sm:text-base"
          >
            Hazırladığım işlərdən seçilmiş 5 layihə. Kartın üzərinə klikləyərək texnologiyalar və layihə haqqında ətraflı məlumat ala bilərsiniz.
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
            <div className="relative mb-12">
              <div
                ref={containerRef}
                onScroll={handleScroll}
                role="region"
                aria-roledescription="carousel"
                aria-label="Seçilmiş layihələr"
                className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} / ${featuredProjects.length}`}
                    className="shrink-0 basis-full snap-start px-1.5 sm:basis-1/2 sm:px-2 lg:basis-1/3"
                  >
                    <ProjectCard project={project} compact />
                  </div>
                ))}
              </div>

              <CarouselControls
                activeIndex={activeIndex}
                ariaLabel="Layihə slideri"
                pages={pages}
                onNext={goNext}
                onPrevious={goPrevious}
                onSelect={scrollToIndex}
              />
            </div>
          </motion.div>

          <div className="mt-7 flex justify-end">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
            >
              Bütün layihələrə bax
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProjectsSection
