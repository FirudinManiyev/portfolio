import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import fmLogo from "../assets/fm_logo.png"

const quickLinks = [
  { to: "/", label: "Ana səhifə" },
  { to: "/about", label: "Haqqımda" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Proyektlər" },
  { to: "/certificates", label: "Sertifikatlar" },
  { to: "/blog", label: "Bloq" },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/firudin-maniyev-4843242b7/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  { href: "https://github.com/FirudinManiyev", label: "GitHub", icon: FaGithub },
  { href: "https://www.instagram.com/firudin.coder/", label: "Instagram", icon: FaInstagram },
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-300/20 bg-neutral-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow-300/80 to-transparent" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-36 w-2/3 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-10 h-36 w-36 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-[1.25fr_1fr_1fr] lg:items-start lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.img
            whileHover={{ scale: 1.05, rotate: -1 }}
            src={fmLogo}
            alt="FM logo"
            className="h-24 w-24 object-contain drop-shadow-[0_0_30px_rgba(250,204,21,0.35)]"
          />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-300">
            Kod, dizayn və istifadəçi təcrübəsinin kəsişməsində, ideyanı estetik və performanslı
            məhsula çevirməyi sevirəm.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2.5 lg:justify-start">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <motion.a
                whileHover={{ y: -4, scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-yellow-300/30 bg-black/30 p-2.5 text-neutral-300 transition duration-300 hover:border-yellow-300/80 hover:bg-yellow-400/15 hover:text-yellow-100 hover:shadow-[0_12px_24px_rgba(250,204,21,0.32)]"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-center text-sm font-semibold tracking-[0.16em] text-yellow-100 uppercase lg:text-left">
            Səhifələr
          </h4>
          <div className="mt-4 grid grid-cols-1 gap-2 rounded-2xl border border-yellow-300/20 bg-white/4 p-2 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "group rounded-xl px-3 py-2.5 text-center text-sm transition duration-300 lg:text-left",
                    isActive
                      ? "bg-yellow-300 text-black shadow-[0_8px_18px_rgba(250,204,21,0.35)]"
                      : "text-neutral-300 hover:-translate-y-0.5 hover:bg-white/7 hover:text-yellow-100",
                  ].join(" ")
                }
              >
                <span className="inline-flex items-center gap-1.5">
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-center text-sm font-semibold tracking-[0.16em] text-yellow-100 uppercase lg:text-left">
            Əlaqə
          </h4>
          <div className="mt-4 rounded-2xl border border-yellow-300/20 bg-white/4 p-4">
            <p className="text-center text-sm text-neutral-200 lg:text-left">+994 50 769 36 54</p>
            <a
              href="mailto:hello@firudin.dev"
              className="mt-2 block text-center text-sm text-neutral-300 transition hover:text-yellow-100 lg:text-left"
            >
              firudinmaniyev@gmail.com
            </a>

            <motion.div whileHover={{ y: -2 }} className="mt-5 inline-flex w-full">
              <NavLink
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-yellow-200/90 bg-linear-to-r from-yellow-100 via-yellow-300 to-yellow-500 px-4 py-2.5 text-sm font-semibold text-black shadow-[0_10px_26px_rgba(250,204,21,0.36)] transition duration-300 hover:shadow-[0_16px_30px_rgba(250,204,21,0.52)]"
              >
                Əlaqə saxla
                <ArrowUpRight size={14} />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-300/15">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-neutral-500 sm:px-6 lg:px-8">
          <p>© 2026 Firudin Maniyev. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer