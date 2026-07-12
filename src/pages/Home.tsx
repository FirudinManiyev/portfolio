import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap, Mail, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TypewriterAnimation from '../components/TypewriterAnimation';
import Lanyard from '../components/Lanyard';
import { about } from '../data/about';
import { certificates } from '../data/certificates';
import { education } from '../data/education';

const aboutHighlights = [
	{
		label: 'Layihə sayı',
		value: '10+',
		icon: BriefcaseBusiness,
	},
	{
		label: 'Təcrübə ili',
		value: '1+',
		icon: GraduationCap,
	},
	{
		label: 'Fokus sahəsi',
		value: 'Frontend',
		icon: Sparkles,
	},
	{
		label: 'İş tərzi',
		value: 'Performance First',
		icon: Award,
	},
];

function Home() {
	const [selectedCertificateImage, setSelectedCertificateImage] = useState<string | null>(null);

	return (
		<div className="space-y-4 sm:space-y-6 lg:space-y-8">

			{/* Hero section */}

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

			{/* About section */}

			<section className="relative -mt-4 sm:-mt-6 lg:-mt-10">
				<div className="container relative z-10 mx-auto px-6">
					<div className="mx-auto max-w-6xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.5 }}
							className="flex justify-center"
						>
							<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.22em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl">
								Haqqımda
							</div>
						</motion.div>

						<div className="mt-16 grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-stretch xl:mt-20 xl:gap-8">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.5 }}
								className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:h-full"
							>
								{aboutHighlights.map((item) => {
									const Icon = item.icon;

									return (
										<div
											key={item.label}
												className="flex min-h-[96px] items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/7"
										>
												<div className="flex min-w-0 items-center gap-3">
													<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300">
														<Icon className="h-5 w-5" />
													</div>
													<p className="text-sm font-medium text-neutral-300 sm:text-base">{item.label}</p>
												</div>

												<p className="shrink-0 text-right text-lg font-semibold text-white sm:text-xl lg:text-2xl">{item.value}</p>
										</div>
									)
								})}
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.55, delay: 0.08 }}
								className="relative flex min-h-[420px] h-full flex-col rounded-[2rem] border border-white/10 bg-neutral-950/75 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:min-h-[460px] sm:p-8 lg:min-h-[488px]"
							>
								<h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
									{about.name} kimdir?
								</h3>
								<p className="mt-3 text-sm font-medium text-yellow-300 sm:text-base">
									{about.profession} • {about.location}
								</p>

								<div className="mt-8 space-y-5 text-sm leading-7 text-neutral-300 sm:text-[15px] lg:text-base lg:leading-8">
									{about.bio
										.trim()
										.split('\n')
										.filter(Boolean)
										.map((paragraph) => (
											<p key={paragraph}>{paragraph.trim()}</p>
										))}
								</div>

								<div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
									<a
										href="https://flowcv.com/resume/i4nksq7e64a1"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-xl border border-yellow-300/30 bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(250,204,21,0.28)]"
									>
										<Download className="h-4 w-4" />
										CV Yüklə
									</a>
									<Link
										to="/about"
										className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
									>
										Ətraflı məlumat üçün →
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Education section */}
			<section className="relative mt-20 sm:mt-24 lg:mt-28">
				<div className="container relative z-10 mx-auto px-6">
					<div className="mx-auto max-w-6xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.5 }}
							className="flex justify-center"
						>
							<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.22em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl">
								TƏHSİL YOLUM
							</div>
						</motion.div>

						<div className="mt-16 flex justify-center xl:mt-20">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.5 }}
								className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2"
							>
								{education.map((item) => (
									<article
										key={item.id}
										className="group flex min-h-[170px] items-stretch gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/7"
									>
										<div className="w-28 shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20 sm:w-30">
											<img
												src={item.image}
												alt={item.institution}
												className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
											/>
										</div>

										<div className="flex min-w-0 flex-1 flex-col justify-between py-1">
											<div className="space-y-2">
												<h3 className="text-base font-semibold leading-snug text-white sm:text-lg">{item.institution}</h3>
												<p className="text-sm font-medium text-neutral-400">{item.major}</p>
												<p className="text-xs font-medium uppercase tracking-[0.18em] text-yellow-300/90">{item.date}</p>
											</div>

											<div className="mt-auto flex justify-end pt-4">
												<Link
													to="/education"
													className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-200 transition duration-300 hover:text-yellow-300"
												>
													daha ətraflı →
												</Link>
											</div>
										</div>
									</article>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Certificates section */}
			<section className="relative mt-20 sm:mt-24 lg:mt-28">
				<div className="container relative z-10 mx-auto px-6">
					<div className="mx-auto max-w-6xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.5 }}
							className="flex justify-center"
						>
							<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-lg font-semibold uppercase tracking-[0.22em] text-yellow-300 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-8 sm:py-3.5 sm:text-xl">
								SERTİFİKATLARIM
							</div>
						</motion.div>

						<div className="mt-16 grid gap-6 md:grid-cols-3 xl:mt-14 xl:gap-8">
							{certificates.slice(0, 3).map((item, index) => (
								<motion.article
									key={item.id}
									initial={{ opacity: 0, y: 18 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.25 }}
									transition={{ duration: 0.45, delay: index * 0.08 }}
									className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/7"
								>
									<button
										type="button"
										onClick={() => setSelectedCertificateImage(item.image)}
										className="block w-full text-left"
										aria-label={`${item.title} sertifikatını tam ölçüdə aç`}
									>
										<div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
											<img
												src={item.image}
												alt={item.title}
												className="h-full w-full object-cover object-center cursor-pointer transition duration-300 group-hover:scale-105"
											/>
										</div>

										<div className="mt-4 space-y-3">
											<h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
											<p className="text-sm font-medium text-neutral-400">{item.issuer}</p>
											<p className="text-xs font-medium uppercase tracking-[0.18em] text-yellow-300/90">{item.date}</p>
										</div>
									</button>
								</motion.article>
							))}
						</div>

						<div className="mt-8 flex justify-end">
							<Link
								to="/certificates"
								className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
							>
								Bütün sertifikatlara bax →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{selectedCertificateImage ? (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
					onClick={() => setSelectedCertificateImage(null)}
				>
					<div
						className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setSelectedCertificateImage(null)}
							className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-sm text-white transition hover:bg-black/70"
						>
							Bağla
						</button>
						<img
							src={selectedCertificateImage}
							alt="Seçilmiş sertifikat"
							className="max-h-[90vh] w-full object-contain"
						/>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Home;