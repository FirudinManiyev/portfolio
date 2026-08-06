import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsAppButton() {
  const phoneNumber = '+994507693654';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə əlaqə"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{
        scale: 1.08,
        y: -6,
        rotate: 5,
      }}
      whileTap={{ scale: 0.92 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,197,94,0.7)]"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 15, scale: 1.15 }}
        transition={{ duration: 0.25 }}
        className="relative z-10"
      >
        <FaWhatsapp className="h-7 w-7" />
      </motion.div>

      {/* Hidden Text */}
      <span
        className="relative z-10 max-w-0 overflow-hidden whitespace-nowrap font-medium opacity-0 transition-all duration-300 group-hover:max-w-28 group-hover:opacity-100"
      >
        <span className="ml-3">WhatsApp</span>
      </span>

      {/* Glow */}
      <div className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60 bg-green-400" />

      {/* Shine */}
      <span className="absolute -left-16 top-0 h-full w-12 -skew-x-12 bg-white/30 transition-all duration-700 group-hover:left-[130%]" />

    </motion.a>
  );
}
