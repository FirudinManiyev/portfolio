import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

function Projects() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl"
      >
        <header className="mb-14 text-center sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300/80"
          >
            Portfolio seçimi
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-3 text-4xl font-black tracking-tight text-yellow-300 sm:text-5xl lg:text-6xl"
          >
            Layihələrim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
          >
            Hazırladığım veb və mobil məhsullar. Ətraflı məlumat üçün istənilən layihə kartına klikləyin.
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 max-w-3xl text-center text-sm leading-7 text-neutral-500"
        >
          Mini layihələr bu siyahıya daxil edilməyib. Bütün açıq mənbəli işlərimi GitHub profilimdə görə bilərsiniz.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Projects
