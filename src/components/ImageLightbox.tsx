import { useEffect, useEffectEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ImageLightboxProps {
  src: string | null
  alt: string
  onClose: () => void
}

function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const handleClose = useEffectEvent(onClose)

  useEffect(() => {
    if (!src) return

    const previousOverflow = document.body.style.overflow
    const previouslyFocusedElement = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocusedElement?.focus()
    }
  }, [src])

  return (
    <AnimatePresence>
      {src ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.6)] sm:p-3"
          >
            <button
              type="button"
              autoFocus
              onClick={onClose}
              aria-label="Şəkli bağla"
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:border-yellow-300/40 hover:bg-yellow-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={src}
              alt={alt}
              className="max-h-[calc(90vh-1.5rem)] w-full rounded-[1.1rem] object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ImageLightbox
