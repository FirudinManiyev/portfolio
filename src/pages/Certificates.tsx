import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/certificates';
import { X, ZoomIn } from 'lucide-react';

function Certificates() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const modalVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <div className="min-h-screen pt-10 pb-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F4F5] mb-4"
                    >
                        <span className="text-yellow-400">Sertifikatlarım</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        Təhsil və inkişaf yolumda əldə etdiyim sertifikatlar
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-[#18181B]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#27272A] hover:border-yellow-400/50 transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedImage(cert.image)}
                        >
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        className="bg-yellow-400 p-3 rounded-full"
                                    >
                                        <ZoomIn className="w-6 h-6 text-black" />
                                    </motion.div>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block px-3 py-1.5 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/20">
                                        {cert.date}
                                    </span>
                                </div>

                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-xl font-bold text-[#F4F4F5] mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2"
                                >
                                    {cert.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-[#A1A1AA] text-base mb-3"
                                >
                                    {cert.issuer}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[#A1A1AA] text-sm leading-relaxed line-clamp-3"
                                >
                                    {cert.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[#A1A1AA] text-sm">
                        Öyrənmək heç bitməyən bir prosesdir
                    </p>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#18181B] hover:bg-yellow-400 hover:text-black text-[#F4F4F5] p-3 rounded-full transition-all duration-300 z-10"
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-6xl max-h-[90vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Sertifikat"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Certificates;