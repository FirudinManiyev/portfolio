import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, CalendarDays, ExternalLink, Layers3 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import NotFoundPage from './NotFoundPage'

function ProjectDetails() {
  const { slug = '' } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)

  if (!project) return <NotFoundPage />

  return (
    <article className="relative min-h-screen overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_72%_12%,rgba(250,204,21,0.12),transparent_42%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-neutral-200 backdrop-blur-xl transition hover:-translate-x-0.5 hover:border-yellow-300/30 hover:text-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Layihələrə geri dön
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.36)] sm:p-3"
          >
            <div className="relative overflow-hidden rounded-[1.55rem] bg-neutral-900">
              <img
                src={project.image}
                alt={`${project.title} layihəsinin ekran görüntüsü`}
                width={1280}
                height={800}
                decoding="async"
                className="aspect-[16/10] h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1.5 text-xs font-semibold text-yellow-200">
                <CalendarDays className="h-3.5 w-3.5" />
                {project.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-neutral-300">
                <Layers3 className="h-3.5 w-3.5" />
                Portfolio layihəsi
              </span>
            </div>

            <h1 className="mt-6 text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-neutral-300">{project.longDescription}</p>

            <div className="mt-7">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300/85">
                Texnologiyalar
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Layihədə istifadə olunan texnologiyalar">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-neutral-200"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              >
                <FaGithub className="h-4 w-4" />
                GitHub kodu
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-200/70 bg-linear-to-r from-yellow-200 to-amber-400 px-5 py-3.5 text-sm font-bold text-neutral-950 shadow-[0_14px_34px_rgba(250,204,21,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(250,204,21,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  Canlı demonu aç
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}

export default ProjectDetails
