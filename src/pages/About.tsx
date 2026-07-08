import { motion } from "framer-motion"
import { Award, BriefcaseBusiness, Code2, Download, GraduationCap, MapPin, Sparkles } from "lucide-react"
import heroImage from "../assets/hero.png"

const highlights = [
  {
    title: "Clean frontend architecture",
    description: "Məntiqi parçalanmış, saxlanması rahat və yenidən istifadə oluna bilən komponentlər qururam.",
    icon: Code2,
  },
  {
    title: "Product thinking",
    description: "Sadəcə interfeys yox, istifadəçi axınını və nəticəni düşünən həllər hazırlayıram.",
    icon: Sparkles,
  },
  {
    title: "Fullstack mindset",
    description: "Frontend, backend və deployment tərəflərini bir-birindən ayrılmış şəkildə idarə etməyə üstünlük verirəm.",
    icon: BriefcaseBusiness,
  },
]

const stats = [
  { value: "4+", label: "ildə təcrübə" },
  { value: "20+", label: "tamamlanmış iş" },
  { value: "100%", label: "responsive yanaşma" },
  { value: "UI/UX", label: "fokus sahəsi" },
]

const journey = [
  {
    year: "2019",
    title: "Başlanğıc",
    description: "İlk layihələrimlə veb inkişafına ciddi şəkildə başladım və fundamentals üzərində dayandım.",
  },
  {
    year: "2021",
    title: "Dərinləşmə",
    description: "React, TypeScript və komponent əsaslı arxitektura ilə daha sistemli işləməyə keçdim.",
  },
  {
    year: "2024",
    title: "Premium təcrübə",
    description: "İstifadəçi təcrübəsi, performans və animasiyanı bir yerdə düşünən portfoliolara fokuslandım.",
  },
]

function About() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-[-8%] top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-300/8 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-2 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200">
            <Award className="h-4 w-4" />
            Haqqımda
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Premium hiss verən, sürətli və düşünülmüş rəqəmsal məhsullar qururam.
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base lg:text-lg">
            Mən Firudinəm. Məqsədim sadəcə işləyən interfeyslər yaratmaq deyil, həm də təmiz kod bazası,
            axıcı animasiyalar və real istifadə ssenarilərində stabil davranan məhsullar hazırlamaqdır.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                >
                  <div className="text-2xl font-bold text-yellow-300 sm:text-3xl">{stat.value}</div>
                  <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-neutral-950/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6 lg:p-7">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.42, delay: index * 0.08 }}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition duration-300 hover:border-yellow-300/20 hover:bg-white/7"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-200 shadow-[0_0_30px_rgba(250,204,21,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="space-y-1">
                      <h2 className="text-base font-semibold text-white sm:text-lg">{item.title}</h2>
                      <p className="text-sm leading-6 text-neutral-400 sm:text-[15px]">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="relative"
          >
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full border border-yellow-300/20 bg-yellow-300/10 blur-2xl sm:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-white/[0.03] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-neutral-950/80">
                <img
                  src={heroImage}
                  alt="Firudin Maniyev"
                  className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[580px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/65 to-transparent p-5 sm:p-6">
                  <div className="max-w-md space-y-3">
                    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur-md">
                      <MapPin className="h-3.5 w-3.5" />
                      Bakı, Azərbaycan
                    </p>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">Frontend yönümlü fullstack developer</h3>
                    <p className="text-sm leading-6 text-neutral-300 sm:text-[15px]">
                      İnterfeysdən başlayıb arxitekturaya qədər düşünən, vizual təmizlik və performansı birlikdə prioritet edən bir yanaşma.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <GraduationCap className="h-5 w-5 text-yellow-300" />
                  <p className="mt-3 text-sm text-neutral-400">Təhsil və öyrənmə</p>
                  <p className="mt-1 font-medium text-white">Davamlı inkişaf</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <BriefcaseBusiness className="h-5 w-5 text-yellow-300" />
                  <p className="mt-3 text-sm text-neutral-400">İş tərzi</p>
                  <p className="mt-1 font-medium text-white">Sistemli və çevik</p>
                </div>

                <a
                  href="https://flowcv.com/resume/i4nksq7e64a1"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-yellow-300/30 hover:bg-white/7"
                >
                  <Download className="h-5 w-5 text-yellow-300" />
                  <p className="mt-3 text-sm text-neutral-400">CV</p>
                  <span className="mt-1 block font-medium text-white">Yüklə və bax</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {journey.map((item) => (
            <article
              key={item.year}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <div className="text-sm font-semibold tracking-[0.2em] text-yellow-300">{item.year}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-[15px]">{item.description}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About