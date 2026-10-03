import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  description: string
  eyebrow?: string
}

function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="mb-14 text-center sm:mb-16">
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300/80"
        >
          {eyebrow}
        </motion.p>
      ) : null}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: eyebrow ? 0.06 : 0 }}
        className="mt-3 text-balance text-4xl font-black tracking-tight text-yellow-300 sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: eyebrow ? 0.12 : 0.08 }}
        className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
      >
        {description}
      </motion.p>
    </header>
  )
}

export default PageHeader
