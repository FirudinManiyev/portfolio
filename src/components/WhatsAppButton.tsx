import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

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
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 hover:bg-green-400 hover:shadow-2xl group"
    >
      <motion.div
        whileHover={{ rotate: -10 }}
        transition={{ duration: 0.2 }}
      >
        <FaWhatsapp className="h-6 w-6" />
      </motion.div>

      {/* Pulse animation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500 opacity-75"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.75, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.a>
  );
}
