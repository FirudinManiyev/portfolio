import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-4 py-20">
      {/* Background glow effects */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="absolute h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Floating 404 */}
        <motion.div
          variants={itemVariants}
          animate={floatingVariants}
          className="relative mb-8"
        >
          <motion.div
            className="text-8xl font-black text-white sm:text-9xl"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(135deg, #f0f9ff 0%, #fef08a 50%, #fef08a 100%)",
              textShadow: "0 0 30px rgba(250, 204, 21, 0.3)",
              filter: "drop-shadow(0 0 20px rgba(250, 204, 21, 0.2))",
            }}
          >
            404
          </motion.div>
          <motion.div
            className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-yellow-400/10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
        >
          Səhifə Tapılmadı
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mb-2 text-sm font-medium uppercase tracking-widest text-yellow-400"
        >
          Hövsələ Edin
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-lg text-base text-neutral-400 sm:text-lg"
        >
          Axtardığın səhifə mövcud deyil və ya bu ünvan artıq dəyişdirilmiş ola bilər.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-yellow-400 to-yellow-300 px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:shadow-lg hover:shadow-yellow-400/50"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-400"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <span className="relative flex items-center gap-2">
              Ana Səhifəyə Qayıt
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
          </Link>
        </motion.div>

        {/* Additional info */}
        <motion.p
          variants={itemVariants}
          className="mt-12 text-xs text-neutral-500"
        >
          Problemin davam etdiyi halda{" "}
          <Link
            to="/contact"
            className="text-yellow-400 transition hover:text-yellow-300"
          >
            bizimlə əlaqə saxla
          </Link>
        </motion.p>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-yellow-400/30"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-10 top-20 h-3 w-3 rounded-full bg-yellow-400/20"
        animate={{ scale: [1.5, 1, 1.5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  )
}

export default NotFoundPage