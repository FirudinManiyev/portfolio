import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap, Mail, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TypewriterAnimation from '../components/TypewriterAnimation';
import Lanyard from '../components/Lanyard';
import { about } from '../data/about';

const aboutHighlights = [
	{
		label: 'Layihə sayı',
		value: '10+',
		icon: BriefcaseBusiness,
	},
	{
		label: 'Təcrübə ili',
		value: '2+',
		icon: GraduationCap,
	},
	{
		label: 'Fokus sahəsi',
		value: 'Frontend',
		icon: Sparkles,
	},
	{
		label: 'İş tərzi',
		value: 'Clean & responsive',
		icon: Award,
	},
];

function Home() {
	return (
		<div className="space-y-16 sm:space-y-24 lg:space-y-28">
			<section className="relative flex min-h-[calc(100vh-5rem)] items-start justify-center overflow-hidden pt-6 sm:pt-8 lg:pt-10">

				<div className="container relative z-10 mx-auto px-6 py-2 sm:py-4">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:items-center lg:-translate-y-18">
						{/* Left side - Text content */}
						<div className="order-1 lg:order-1">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								className="max-w-lg space-y-6 lg:ml-20 xl:ml-28"
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
								className="relative h-[450px] lg:h-[680px]"
							>
								<Lanyard position={[0, 5, 15]} gravity={[0, -40, 0]} fov={15} />
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute left-0 top-8 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
					<div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
				</div>

				<div className="container relative z-10 mx-auto px-6">
					<div className="mx-auto max-w-6xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.5 }}
							className="flex justify-center"
						>
							<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
								Haqqımda
							</div>
						</motion.div>

						<div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.5 }}
								className="grid gap-4 sm:grid-cols-2"
							>
								{aboutHighlights.map((item) => {
									const Icon = item.icon;

									return (
										<div
											key={item.label}
											className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/7"
										>
											<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300">
												<Icon className="h-5 w-5" />
											</div>
											<p className="mt-4 text-sm text-neutral-400">{item.label}</p>
											<p className="mt-2 text-xl font-semibold text-white sm:text-2xl">{item.value}</p>
										</div>
									)
								})}
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.55, delay: 0.08 }}
								className="rounded-[2rem] border border-white/10 bg-neutral-950/75 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8"
							>
								<h3 className="text-2xl font-semibold text-white sm:text-3xl">
									{about.name} kimdir?
								</h3>
								<p className="mt-2 text-sm text-yellow-300">{about.profession} • {about.location}</p>

								<div className="mt-5 space-y-4 text-sm leading-7 text-neutral-300 sm:text-[15px] lg:text-base lg:leading-8">
									{about.bio
										.trim()
										.split('\n')
										.filter(Boolean)
										.map((paragraph) => (
											<p key={paragraph}>{paragraph.trim()}</p>
										))}
								</div>

								<div className="mt-6 flex flex-wrap gap-3">
									<a
										href="https://flowcv.com/resume/i4nksq7e64a1"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-xl border border-yellow-300/30 bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(250,204,21,0.28)]"
									>
										<Download className="h-4 w-4" />
										CV Yüklə
									</a>
									<a
										href="/contact"
										className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
									>
										Əlaqə saxla
									</a>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;