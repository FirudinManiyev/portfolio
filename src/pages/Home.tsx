import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Award, BriefcaseBusiness, Download, GraduationCap, Mail, Sparkles } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import TypewriterAnimation from '../components/TypewriterAnimation';
import ContactSection from '../components/ContactSection';
import HomeSkillsSection from '../components/HomeSkillsSection';
import HomeProjectsSection from '../components/HomeProjectsSection';
import HomeCertificatesSection from '../components/HomeCertificatesSection';
import ProfileCard from '../components/ProfileCard';
import firudinProfileImage from '../assets/firudinmaniyev.jpeg';
import fmLogo from '../assets/fm_logo.png';
import { about } from '../data/about';
import { education } from '../data/education';

const heroContainerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.08,
			staggerChildren: 0.1,
		},
	},
};

const heroItemVariants: Variants = {
	hidden: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const heroStats = [
	{ value: '10+', label: 'Layihə' },
	{ value: '2+ il', label: 'Təcrübə' },
	{ value: '100%', label: 'Məsuliyyət' },
];

const aboutHighlights = [
	{
		label: 'Layihə sayı',
		value: '10+',
		icon: BriefcaseBusiness,
	},
	{
		label: 'Təcrübəm',
		value: '2+ il',
		icon: GraduationCap,
	},
	{
		label: 'Fokus sahəsi',
		value: 'Frontend',
		icon: Sparkles,
	},
	{
		label: 'İş tərzi',
		value: 'Problem-solving',
		icon: Award,
	},
];

function Home() {
	return (
		<div className="space-y-4 sm:space-y-6 lg:space-y-8">

			{/* Hero section */}

			<section
				id="hero"
				aria-labelledby="hero-title"
				className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-10 sm:py-12 lg:py-6"
			>
				<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute left-[8%] top-[16%] h-44 w-44 rounded-full bg-yellow-300/8 blur-3xl sm:h-64 sm:w-64" />
					<div className="absolute bottom-[8%] right-[10%] h-56 w-56 rounded-full bg-amber-500/8 blur-3xl sm:h-80 sm:w-80" />
					<div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-950/65 to-transparent" />
				</div>

				<div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
					<div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-12">
						<motion.div
							variants={heroContainerVariants}
							initial="hidden"
							animate="visible"
							className="relative z-20 mx-auto w-full max-w-2xl md:mx-0"
						>
							<motion.h1
								id="hero-title"
								variants={heroItemVariants}
								className="text-balance text-4xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
							>
								<span className="block text-lg font-medium tracking-normal text-neutral-400 sm:text-xl">Salam, mən</span>
								<span className="mt-1 block pb-2 leading-[1.12] bg-linear-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
									Firudin Maniyev
								</span>
								<span className="mt-1 block text-[0.5em] font-semibold leading-[1.24] tracking-[-0.025em] text-neutral-200">
									İdeyaları funksional rəqəmsal məhsullara çevirirəm.
								</span>
							</motion.h1>

							<motion.div
								variants={heroItemVariants}
								className="mt-4 flex min-h-12 w-fit max-w-full items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-4 py-1 text-base font-semibold shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:text-lg"
							>
								<span className="shrink-0 text-neutral-400">Əsas sahəm:</span>
								<TypewriterAnimation
									words={['Frontend Development', 'Backend Development', 'Full-stack Development']}
									className="text-yellow-300"
								/>
							</motion.div>

							<motion.p
								variants={heroItemVariants}
								className="mt-3 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8"
							>
								React, TypeScript və müasir backend texnologiyaları ilə sürətli,
								responsiv və istifadəçi yönümlü veb məhsullar hazırlayıram.
							</motion.p>

							<motion.div variants={heroItemVariants} className="mt-5 flex flex-wrap gap-3">
								<Link
									to="/projects"
									className="group inline-flex items-center gap-2 rounded-2xl border border-yellow-200/70 bg-linear-to-r from-yellow-200 via-yellow-300 to-amber-400 px-6 py-3.5 text-sm font-bold text-neutral-950 shadow-[0_16px_38px_rgba(250,204,21,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(250,204,21,0.36)]"
								>
									Layihələrə bax
									<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
								</Link>
								<a
									href="https://flowcv.com/resume/i4nksq7e64a1"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/10"
								>
									<Download className="h-4 w-4" />
									CV-ə bax
								</a>
							</motion.div>

							<motion.div variants={heroItemVariants} className="mt-4 flex flex-col gap-5 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
								<div className="grid grid-cols-3 gap-5">
									{heroStats.map((stat) => (
										<div key={stat.label}>
											<p className="text-lg font-bold text-white sm:text-xl">{stat.value}</p>
											<p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-neutral-500">{stat.label}</p>
										</div>
									))}
								</div>

								<div className="flex items-center gap-2">
									{[
										{ href: 'https://github.com/FirudinManiyev', label: 'GitHub', icon: FaGithub },
										{ href: 'https://linkedin.com/in/firudin-maniyev-4843242b7', label: 'LinkedIn', icon: FaLinkedinIn },
										{ href: 'https://instagram.com/firudin.coder', label: 'Instagram', icon: FaInstagram },
									].map(({ href, label, icon: Icon }) => (
										<motion.a
											key={label}
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={label}
											whileHover={{ y: -3, scale: 1.06 }}
											whileTap={{ scale: 0.94 }}
											className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-colors duration-300 hover:border-yellow-300/30 hover:bg-yellow-300/10 hover:text-yellow-200"
										>
											<Icon className="h-4 w-4" />
										</motion.a>
									))}
									<a
										href="mailto:firudinmaniyev@gmail.com"
										aria-label="Email"
										className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-yellow-300/10 hover:text-yellow-200"
									>
										<Mail className="h-4 w-4" />
									</a>
								</div>
							</motion.div>
						</motion.div>

						<div className="order-2 flex justify-center md:justify-end">
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="relative flex w-full items-center justify-center py-2 md:justify-end lg:min-h-[560px]"
							>
								<ProfileCard
									avatarUrl={firudinProfileImage}
									miniAvatarUrl={firudinProfileImage}
									iconUrl={fmLogo}
									name="Firudin Maniyev"
									title="Full-stack Developer"
									handle="firudincoder"
									status="Əlaqə üçün açıq"
									contactText="Əlaqə saxla"
									contactTo="/contact"
									showUserInfo
									enableTilt
									enableMobileTilt={false}
									behindGlowEnabled
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* About section */}

			<section id="about" className="relative mt-4 scroll-mt-28 sm:mt-8 lg:-mt-4">
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
								{aboutHighlights.map((item, index) => {
									const Icon = item.icon;

									return (
										<motion.div
											key={item.label}
											initial={{ opacity: 0, x: -14 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true, amount: 0.45 }}
											transition={{ duration: 0.4, delay: index * 0.06 }}
											whileHover={{ y: -5, scale: 1.01 }}
											className="flex min-h-[96px] items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/7"
										>
											<div className="flex min-w-0 items-center gap-3">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300">
													<Icon className="h-5 w-5" />
												</div>
												<p className="text-sm font-medium text-neutral-300 sm:text-base">{item.label}</p>
											</div>

											<p className="shrink-0 text-right text-lg font-semibold text-white sm:text-xl lg:text-2xl">{item.value}</p>
										</motion.div>
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
										CV-ə bax
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

						<motion.p
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.45, delay: 0.08 }}
							className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-neutral-400 sm:text-base"
						>
							Təhsil və akademik təcrübəm haqqında qısa məlumat. Daha ətraflı məlumat üçün aşağıdakı linkdən bütün təhsil yoluma baxa bilərsiniz.
						</motion.p>

						<div className="mt-16 flex justify-center xl:mt-14">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.5 }}
								className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2"
							>
								{education.map((item, index) => (
									<motion.article
										key={item.id}
										initial={{ opacity: 0, y: 18 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.25 }}
										transition={{ duration: 0.45, delay: index * 0.07 }}
										whileHover={{ y: -6 }}
										className="group flex min-h-[170px] items-stretch gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/7"
									>
										<div className="w-28 shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20 sm:w-30">
											<img
												src={item.image}
												alt={item.institution}
												loading="lazy"
												decoding="async"
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
									</motion.article>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			<HomeCertificatesSection />

			<HomeSkillsSection />

			<HomeProjectsSection />

			<ContactSection />

		</div>
	);
}

export default Home;
