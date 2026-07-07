import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TypewriterAnimation from '../components/TypewriterAnimation';
import Lanyard from '../components/Lanyard';

function Home() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">

			<div className="container mx-auto px-6 py-3 relative z-10">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:items-center">
					{/* Left side - Text content */}
					<div className="order-1 lg:order-1">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className="space-y-6 max-w-lg lg:ml-10 xl:ml-16"
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								<h2 className="text-base md:text-lg text-yellow-400 font-medium mb-2">
									Salam, mən
								</h2>
								<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
									Firudin Maniyev
								</h1>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="text-xl md:text-3xl lg:text-4xl font-semibold"
							>
								<span className="text-gray-400">Mən bir </span>
								<TypewriterAnimation
									words={['Frontend Developer', 'Backend Developer', 'Fullstack Developer']}
									className="text-yellow-400"
								/>
							</motion.div>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed"
							>
								Müasir və istifadəçi dostu veb tətbiqləri hazırlayan
								Fullstack Developer. React, TypeScript və müasir texnologiyalarla
								layihələr inkişaf etdirirəm.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 }}
								className="flex flex-wrap gap-4 pt-4"
							>
								<a
									href="https://flowcv.com/resume/i4nksq7e64a1"
									target="_blank"
									rel="noopener noreferrer"
									className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20"
								>
									<Download className="w-5 h-5" />
									CV Yüklə
								</a>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
								className="flex gap-4 pt-4"
							>
								<a
									href="https://github.com/FirudinManiyev"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 group"
									aria-label="GitHub"
								>
									<FaGithub className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
								</a>
								<a
									href="https://linkedin.com/in/firudin-maniyev-4843242b7"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 group"
									aria-label="LinkedIn"
								>
									<FaLinkedin className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
								</a>
								<a
									href="https://instagram.com/firudin.coder"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 group"
									aria-label="Instagram"
								>
									<FaInstagram className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
								</a>
								<a
									href="mailto:firudinmaniyev@gmail.com"
									className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 group"
									aria-label="Email"
								>
									<Mail className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors duration-300" />
								</a>
							</motion.div>
						</motion.div>
					</div>

					{/* Right side - Lanyard 3D Card */}
					<div className="order-2 lg:order-2">
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="relative lg:h-[700px] h-[450px]"
						>
							<Lanyard position={[0, 5, 15]} gravity={[0, -40, 0]} fov={15} />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;