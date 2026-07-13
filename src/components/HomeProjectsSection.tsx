import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const featuredProjects = projects.slice(0, 3);

function HomeProjectsSection() {
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
							LAYİHƏLƏRİM & PROYEKTLƏRİM
						</div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.45, delay: 0.08 }}
						className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-neutral-400 sm:text-base"
					>
						Hazırladığım seçilmiş layihələrdən 3 nümunə. Əgər daha çox layihə görmək istəyirsinizsə, aşağıdakı linkdən bütün proyektlərə baxa bilərsiniz.
					</motion.p>

					<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
						{featuredProjects.map((project, index) => (
							<motion.article
								key={project.id}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.45, delay: index * 0.08 }}
								className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20"
							>
								<div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/25">
									<img
										src={project.image}
										alt={project.title}
										loading="lazy"
										className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
									<div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
										{project.date}
									</div>
								</div>

								<div className="flex flex-1 flex-col p-5 sm:p-6">
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
										<p className="text-sm leading-7 text-neutral-400 sm:text-[15px]">{project.description}</p>
									</div>

									<div className="mt-auto flex items-end justify-between gap-3 pt-6">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
										>
												<FaGithub className="h-4 w-4" />
											Kod
										</a>
										<p className="text-xs font-medium uppercase tracking-[0.18em] text-yellow-300/90">SEÇİLMİŞ LAYİHƏ</p>
									</div>
								</div>
							</motion.article>
						))}
					</div>

					<div className="mt-8 flex justify-end">
						<Link
							to="/projects"
							className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/30 hover:bg-white/10"
						>
							Bütün proyektlərə bax
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeProjectsSection;
