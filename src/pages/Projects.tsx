import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

function Projects() {
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
                        <span className="text-yellow-400">Layihələrim</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        Hazırladığım layihələr və təcrübələrim
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-[#18181B]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#27272A] hover:border-yellow-400/50 transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <div className="aspect-video w-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-400/20">
                                        {project.date}
                                    </span>
                                </div>

                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-xl sm:text-2xl font-bold text-[#F4F4F5] mb-3 group-hover:text-yellow-400 transition-colors duration-300"
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-6"
                                >
                                    {project.description}
                                </motion.p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium text-sm"
                                    >
                                        GitHub
                                        <FaGithub className="w-4 h-4" />
                                    </motion.a>

                                    {project.liveDemo && (
                                        <motion.a
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.25 }}
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-yellow-300 hover:bg-white/10 hover:text-white"
                                        >
                                            Canlı
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                    )}
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
                        Qeyd olaraq deyimki mini layihələri bura daxil etməmişəm. Əgər bütün işlərimi görmək istəyirsinizsə github-a keçid edin.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Projects;
