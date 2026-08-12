import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { getProjectPath } from '../data/projectRoutes'

interface ProjectCardProps {
  project: Project
  compact?: boolean
}

function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const detailsPath = getProjectPath(project.slug)

  return (
    <motion.article
      whileHover={{ y: -7 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:border-yellow-300/30 focus-within:border-yellow-300/40"
    >
      <Link
        to={detailsPath}
        aria-label={`${project.title} layihəsinin detallarına bax`}
        className="absolute inset-0 z-10 rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/25">
        <img
          src={project.image}
          alt={`${project.title} layihəsinin ekran görüntüsü`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {project.date}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition duration-300 group-hover:bg-yellow-300 group-hover:text-black">
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-yellow-200 sm:text-2xl">
          {project.title}
        </h3>
        <p className={[
          'mt-3 text-sm leading-7 text-neutral-400 sm:text-[15px]',
          compact ? 'line-clamp-3' : 'line-clamp-4',
        ].join(' ')}>
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="İstifadə olunan texnologiyalar">
          {project.technologies.slice(0, compact ? 3 : 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[11px] font-medium text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="relative z-20 mt-auto flex flex-wrap gap-2 pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub kodunu aç`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-yellow-300/30 hover:bg-white/10"
          >
            <FaGithub className="h-4 w-4" />
            Kod
          </a>
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} canlı demosunu aç`}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2.5 text-sm font-semibold text-yellow-200 transition hover:bg-yellow-300 hover:text-black"
            >
              Canlı demo
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
