import { motion } from 'framer-motion';
import { education } from '../data/education';

function Education() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                        <span className="text-yellow-400">Təhsilim</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        Təhsil yolculuğum və peşəkar inkişafım üçün keçdiyim mərhələlər
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#18181B]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#27272A] hover:border-yellow-400/50 transition-all duration-300"
                        >
                            <div
                                className={`flex flex-col gap-6 ${
                                    edu.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                            >
                                <div className="flex-shrink-0 md:w-1/3 lg:w-1/4">
                                    <div className="w-full h-48 sm:h-56 md:h-full rounded-2xl overflow-hidden border border-[#27272A]">
                                        <img
                                            src={edu.image}
                                            alt={edu.institution}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <motion.h2
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F4F4F5]"
                                        >
                                            {edu.institution}
                                        </motion.h2>
                                        <span className="inline-block px-4 py-1.5 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/20">
                                            {edu.date}
                                        </span>
                                    </div>

                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-lg sm:text-xl text-[#A1A1AA] mb-4"
                                    >
                                        {edu.major}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-[#A1A1AA] leading-relaxed"
                                    >
                                        {edu.description}
                                    </motion.p>
                                </div>
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
        </div>
    );
}

export default Education;