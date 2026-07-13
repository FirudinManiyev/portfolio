import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

function Skills() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
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
                        <span className="text-yellow-400">Bacarıqlarım</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        Müasir veb tətbiqlər yaratmaq üçün istifadə etdiyim texnologiyalar və alətlər
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={categoryVariants}
                            className="bg-[#18181B]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#27272A] hover:border-[#F59E0B]/50 transition-all duration-300"
                        >
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] mb-6 flex items-center gap-3"
                            >
                                <span className="w-2 h-8 bg-[#F59E0B] rounded-full"></span>
                                {category.title}
                            </motion.h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.id}
                                        variants={skillVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#18181B] rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 border border-[#27272A] hover:border-[#F59E0B] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                                            {skill.image ? (
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#27272A] rounded-lg flex items-center justify-center">
                                                    <span className="text-[#A1A1AA] text-xs sm:text-sm font-medium">
                                                        {skill.name.slice(0, 2)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-[#F4F4F5] text-sm sm:text-base font-medium text-center group-hover:text-[#F59E0B] transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
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
                        Həmişə öyrənirəm və bacarıqlarımı inkişaf etdirirəm
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Skills;