import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.08,
            y: -6,
          }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Yuxarı qalx"
          className="group fixed bottom-6 left-6 z-50 cursor-pointer flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 text-black shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.8)]"
        >
          {/* Arrow */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.15,
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.div>

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />

          {/* Shine */}
          <span className="absolute -left-16 top-0 h-full w-12 -skew-x-12 bg-white/40 transition-all duration-700 group-hover:left-[140%]" />

          {/* Pulse */}
          <motion.span
            className="absolute inset-0 rounded-full bg-yellow-400"
            animate={{
              scale: [1, 1.7],
              opacity: [0.35, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}