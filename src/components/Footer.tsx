import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { NavLink } from "react-router-dom"
import fmLogo from "../assets/fm_logo.png"
import { navigationLinks, siteProfile, socialLinks } from "../data/site"
import SocialIcon from "./SocialIcon"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-300/20 bg-neutral-950">
      {/* top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow-300/80 to-transparent" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-36 w-2/3 -translate-x-1/2 rounded-full bg-yellow-400/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 sm:pt-12 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand block */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.img
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={fmLogo}
              alt="FM logo"
              className="h-20 w-20 object-contain drop-shadow-[0_0_28px_rgba(250,204,21,0.35)]"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">
              Kod, dizayn və istifadəçi təcrübəsinin kəsişməsində ideyanı performanslı məhsula çevirirəm.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              {socialLinks.map(({ href, label, icon }) => (
                <motion.a
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-yellow-300/30 bg-black/40 p-2.5 text-neutral-400 transition duration-300 hover:border-yellow-300/80 hover:bg-yellow-400/15 hover:text-yellow-100 hover:shadow-[0_10px_22px_rgba(250,204,21,0.28)]"
                >
                  <SocialIcon name={icon} className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-xs font-semibold tracking-[0.18em] text-yellow-200/80 uppercase lg:text-left">
              SƏHİFƏLƏR
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-1 sm:grid-cols-2">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        "group flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition duration-200",
                        isActive
                          ? "bg-yellow-300/15 text-yellow-200 font-medium"
                          : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200",
                      ].join(" ")
                    }
                  >
                    <span className="truncate">{link.label}</span>
                    <ArrowUpRight
                      size={11}
                      className="ml-auto shrink-0 opacity-0 transition duration-200 group-hover:opacity-60"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block */}
          <div>
            <h4 className="text-center text-xs font-semibold tracking-[0.18em] text-yellow-200/80 uppercase lg:text-left">
              Əlaqə
            </h4>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${siteProfile.phoneValue}`}
                className="group flex items-center gap-2.5 rounded-xl border border-white/6 bg-white/4 px-4 py-3 text-sm text-neutral-400 transition duration-200 hover:border-yellow-300/25 hover:bg-white/6 hover:text-neutral-200"
              >
                <Phone size={14} className="shrink-0 text-yellow-400/70 group-hover:text-yellow-300" />
                {siteProfile.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteProfile.email}`}
                className="group flex items-center gap-2.5 rounded-xl border border-white/6 bg-white/4 px-4 py-3 text-sm text-neutral-400 transition duration-200 hover:border-yellow-300/25 hover:bg-white/6 hover:text-neutral-200"
              >
                <Mail size={14} className="shrink-0 text-yellow-400/70 group-hover:text-yellow-300" />
                <span className="truncate">{siteProfile.email}</span>
              </a>

              <motion.div whileHover={{ y: -2 }}>
                <NavLink
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-yellow-200/80 bg-linear-to-r from-yellow-100 via-yellow-300 to-yellow-500 px-4 py-2.5 text-sm font-semibold text-black shadow-[0_8px_22px_rgba(250,204,21,0.32)] transition duration-300 hover:shadow-[0_14px_28px_rgba(250,204,21,0.5)]"
                >
                  Əlaqə saxla
                  <ArrowUpRight size={14} />
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-yellow-300/10 pt-5">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="text-xs text-neutral-600">
              © 2026 {siteProfile.name}. Bütün hüquqlar qorunur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
