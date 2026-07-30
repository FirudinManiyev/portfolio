import { motion } from 'framer-motion';
import { about } from '../data/about';
import { MapPin, Mail, Download, Code, Zap, Target, Award } from 'lucide-react';
import profileImage from '../assets/firudin_komphoto.jpg';
import ContactSection from '../components/ContactSection';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
                        <span className="text-yellow-400">Haqqımda</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto"
                    >
                        Mənim haqqımda məlumatlar
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center"
                    >
                        <div className="flex-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5]">
                                    {about.name}
                                </h2>
                                <p className="text-xl sm:text-2xl text-yellow-400 font-medium">
                                    {about.profession}
                                </p>
                                <div className="flex items-center gap-2 text-[#A1A1AA]">
                                    <MapPin className="w-5 h-5" />
                                    <span>{about.location}</span>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed whitespace-pre-line"
                            >
                                {about.bio}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a
                                    href="mailto:firudinmaniyev@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-400/10 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium border border-yellow-400/20"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                                <a
                                    href="https://github.com/FirudinManiyev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#18181B] text-[#F4F4F5] rounded-lg hover:bg-[#27272A] transition-all duration-300 font-medium border border-[#27272A]"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/firudin-maniyev-4843242b7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#18181B] text-[#F4F4F5] rounded-lg hover:bg-[#27272A] transition-all duration-300 font-medium border border-[#27272A]"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://instagram.com/firudin.coder/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#18181B] text-[#F4F4F5] rounded-lg hover:bg-[#27272A] transition-all duration-300 font-medium border border-[#27272A]"
                                >
                                    Instagram
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />
                                <div className="relative rounded-2xl overflow-hidden border border-[#27272A] shadow-2xl">
                                    <img
                                        src={profileImage}
                                        alt={about.name}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: Code, title: "Clean Code", description: "Təmiz və saxlanması asan kod" },
                            { icon: Zap, title: "Fast Performance", description: "Yüksək performanslı həllər" },
                            { icon: Target, title: "Result Oriented", description: "Nəticəyə yönümlü yanaşma" },
                            { icon: Award, title: "Quality Focus", description: "Keyfiyyətə prioritet" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#18181B]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#27272A] hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-lg font-bold text-[#F4F4F5] mb-2">{item.title}</h3>
                                <p className="text-[#A1A1AA] text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-[#18181B]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#27272A]"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F5] mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
                            CV-ə baxın
                        </h3>
                        <p className="text-[#A1A1AA] mb-6">
                            Mənim CV-ni yükləyərək ətraflı məlumat əldə edə bilərsiniz.
                        </p>
                        <a
                            href="https://flowcv.com/resume/i4nksq7e64a1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-all duration-300 font-medium"
                        >
                            <Download className="w-5 h-5" />
                            CV-ə bax
                        </a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                    >
                        <ContactSection className="mt-0" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;