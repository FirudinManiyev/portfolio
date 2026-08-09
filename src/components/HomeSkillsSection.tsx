import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skillCategories } from '../data/skills';

const featuredCategories = skillCategories.map((category) => ({
	...category,
	skills: category.skills.slice(0, 5),
}));

function HomeSkillsSection() {
	return (
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
							Bacarıqlarım
						</div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.45, delay: 0.08 }}
						className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-neutral-400 sm:text-base"
					>
						Layihələrdə istifadə etdiyim əsas texnologiyaları kateqoriyalar üzrə gör.
					</motion.p>

					<div className="mt-14 grid gap-5 md:grid-cols-2 xl:mt-16 xl:gap-6">
						{featuredCategories.map((category, categoryIndex) => (
							<motion.article
								key={category.id}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
								whileHover={{ y: -6, scale: 1.005 }}
								className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 sm:p-6"
							>
								<div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-300/10 blur-2xl" />

								<div className="flex items-start justify-between gap-3">
									<div className="space-y-2">
										<h3 className="text-lg font-semibold text-white sm:text-xl">{category.title}</h3>
									</div>
								</div>

								<div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
									{category.skills.map((skill) => (
										<div
											key={skill.id}
											className="flex min-h-[72px] items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-3.5 py-2.5 transition duration-300 hover:border-yellow-300/25 hover:bg-black/35"
										>
											<img
												src={skill.image}
												alt={skill.name}
												loading="lazy"
												decoding="async"
												className="h-10 w-10 rounded-xl border border-white/15 bg-white/95 p-1 object-contain"
											/>
											<p className="text-sm font-medium text-neutral-200">{skill.name}</p>
										</div>
									))}
								</div>

								{skillCategories[categoryIndex].skills.length > category.skills.length ? (
									<div className="mt-5 flex justify-end">
										<div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/25 bg-gradient-to-r from-yellow-300/10 to-yellow-300/5 px-4 py-2 text-sm font-semibold text-yellow-100 shadow-[0_10px_24px_rgba(250,204,21,0.06)]">
											<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300/15 text-xs font-bold text-yellow-200">
												+
											</span>
											<span>və digərləri</span>
										</div>
									</div>
								) : null}
							</motion.article>
						))}
					</div>

					<div className="mt-6 grid gap-4 md:grid-cols-2">
						<div className="hidden md:block" />
						<div className="flex justify-start md:justify-end">
							<Link
								to="/skills"
								className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
							>
								Bütün bacarıqlara bax
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeSkillsSection;
