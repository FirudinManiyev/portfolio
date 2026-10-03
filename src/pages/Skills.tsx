import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import PageHeader from '../components/PageHeader';

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
                <PageHeader
                    eyebrow="Texniki alətlər"
                    title="Bacarıqlarım"
                    description="Müasir veb tətbiqlər yaratmaq üçün istifadə etdiyim texnologiyalar və alətlər."
                />

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
                            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:border-yellow-300/25 sm:p-8"
                        >
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-6 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl"
                            >
                                <span aria-hidden="true" className="h-8 w-2 rounded-full bg-yellow-300"></span>
                                {category.title}
                            </motion.h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                                {category.skills.map((skill) => (
                                    <motion.article
                                        key={skill.id}
                                        variants={skillVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 transition duration-300 hover:border-yellow-300/30 hover:bg-black/35 hover:shadow-[0_0_20px_rgba(250,204,21,0.14)] sm:p-6"
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
                                                <div className="flex h-full w-full items-center justify-center rounded-lg bg-neutral-800">
                                                    <span className="text-xs font-medium text-neutral-400 sm:text-sm">
                                                        {skill.name.slice(0, 2)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-center text-sm font-medium text-white transition-colors duration-300 group-hover:text-yellow-300 sm:text-base">
                                            {skill.name}
                                        </span>
                                    </motion.article>
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
