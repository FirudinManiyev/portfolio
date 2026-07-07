import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TypewriterAnimation from '../components/TypewriterAnimation';
import Lanyard from '../components/Lanyard';

function Home() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">

			<div className="container mx-auto px-6 py-12 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left side - Text content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<h2 className="text-lg md:text-xl text-yellow-400 font-medium mb-2">
								Salam, mən
							</h2>
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
								Firudin Maniyev
							</h1>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-2xl md:text-4xl lg:text-5xl font-semibold"
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
							className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
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
							<button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
								<Mail className="w-5 h-5" />
								Əlaqə
							</button>
							<button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/20">
								<Download className="w-5 h-5" />
								CV Yüklə
							</button>
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
								className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20"
								aria-label="GitHub"
							>
								<FaGithub className="w-6 h-6 text-white" />
							</a>
							<a
								href="https://linkedin.com/in/firudin-maniyev-4843242b7"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20"
								aria-label="LinkedIn"
							>
								<FaLinkedin className="w-6 h-6 text-white" />
							</a>
							<a
								href="https://instagram.com/firudin.coder"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20"
								aria-label="Instagram"
							>
								<FaInstagram className="w-6 h-6 text-white" />
							</a>
							<a
								href="mailto:firudinmaniyev@gmail.com"
								className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 border border-white/20"
								aria-label="Email"
							>
								<Mail className="w-6 h-6 text-white" />
							</a>
						</motion.div>
					</motion.div>

					{/* Right side - Lanyard 3D Card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="relative lg:h-[600px] h-[400px]"
					>
						<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Home;