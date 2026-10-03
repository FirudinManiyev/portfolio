import { motion } from 'framer-motion';
import { siteProfile } from '../data/site';
import SocialIcon from './SocialIcon';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteProfile.phoneValue.replace(/\+/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə əlaqə"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.3)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(37,211,102,0.42)] sm:bottom-6 sm:right-6"
    >
      <SocialIcon name="whatsapp" className="h-7 w-7" />
    </motion.a>
  );
}
