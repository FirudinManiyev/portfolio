import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';

function Certificates() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<'Hamısı' | 'IT' | 'Şəxsi İnkişaf' | 'Digər'>('Hamısı');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const categories: Array<'Hamısı' | 'IT' | 'Şəxsi İnkişaf' | 'Digər'> = [
        'Hamısı',
        'IT',
        'Şəxsi İnkişaf',
        'Digər',
    ];

    const filteredCertificates =
        selectedCategory === 'Hamısı'
            ? certificates
            : certificates.filter((cert) => cert.category === selectedCategory);

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

                <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                                selectedCategory === category
                                    ? 'border-yellow-300 bg-yellow-300/15 text-yellow-300'
                                    : 'border-white/10 bg-white/5 text-white/80 hover:border-yellow-300 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredCertificates.map((cert) => (
                        <motion.button
                            key={cert.id}
                            type="button"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            aria-label={`${cert.title} sertifikatını tam ölçüdə aç`}
                            className="group overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B]/50 text-left backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
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
                        </motion.button>
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

            <ImageLightbox
                src={selectedImage}
                alt="Seçilmiş sertifikat"
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
}

export default Certificates;
