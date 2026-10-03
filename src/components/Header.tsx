import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import fmLogo from "../assets/fm_logo.png"
import { navigationLinks, socialLinks } from "../data/site"
import SocialIcon from "./SocialIcon"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      className={[
        "sticky top-0 z-50 overflow-hidden border-b border-yellow-300/20 bg-neutral-950/88 backdrop-blur-2xl transition-all duration-300",
        isScrolled
          ? "shadow-[0_16px_40px_rgba(0,0,0,0.62)]"
          : "shadow-[0_12px_38px_rgba(0,0,0,0.55)]",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow-300/80 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-2/3 -translate-x-1/2 bg-linear-to-b from-yellow-400/10 to-transparent blur-2xl" />

      <div
        className={[
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300",
          isScrolled ? "py-2.5 lg:py-3" : "py-3 lg:py-2",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="group block" aria-label="Ana səhifə">
              <img
                src={fmLogo}
                alt="FM logo"
                width={64}
                height={64}
                className="h-16 w-16 object-contain drop-shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]"
              />
            </Link>

            <span className="hidden h-9 w-px bg-yellow-300/35 xl:block" />

            <div className="hidden items-center gap-2 xl:flex">
              {socialLinks.map(({ href, label, icon }) => (
                <motion.a
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-300/25 bg-black/30 text-neutral-300 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/80 hover:bg-yellow-400/15 hover:text-yellow-100 hover:shadow-[0_12px_26px_rgba(250,204,21,0.3)]"
                >
                  <SocialIcon name={icon} className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Əsas naviqasiya"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/3 px-2 py-1.5 lg:flex"
          >
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-full px-3.5 py-2 text-sm transition duration-300",
                    isActive
                      ? "bg-yellow-400 text-black shadow-[0_8px_20px_rgba(250,204,21,0.45)]"
                      : "text-neutral-300 hover:-translate-y-0.5 hover:bg-white/7 hover:text-white hover:shadow-[0_0_18px_rgba(250,204,21,0.24)]",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-[14px] border-2 border-yellow-200/90 bg-linear-to-r from-yellow-100 via-yellow-300 to-yellow-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_26px_rgba(250,204,21,0.4)] transition duration-300 hover:-translate-y-0.5 hover:from-yellow-50 hover:via-yellow-200 hover:to-yellow-400 hover:shadow-[0_14px_30px_rgba(250,204,21,0.52)]"
            >
              Əlaqə
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/15 text-[12px] leading-none">
                <ArrowUpRight size={13} />
              </span>
            </NavLink>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-300/35 bg-black/30 text-yellow-200 transition duration-300 hover:bg-yellow-400/10 hover:shadow-[0_0_16px_rgba(250,204,21,0.35)] lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              id="mobile-navigation"
              className="mt-4 rounded-2xl border border-yellow-300/25 bg-neutral-950/90 p-4 shadow-[0_20px_35px_rgba(0,0,0,0.45)] lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "rounded-xl px-3 py-2.5 text-sm transition",
                        isActive
                          ? "bg-yellow-400 text-black shadow-[0_8px_20px_rgba(250,204,21,0.35)]"
                          : "text-neutral-200 hover:bg-white/5 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-yellow-200/90 bg-linear-to-r from-yellow-100 via-yellow-300 to-yellow-500 px-4 py-3 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(250,204,21,0.36)]"
                >
                  Əlaqə
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/15 text-[12px] leading-none">
                    <ArrowUpRight size={13} />
                  </span>
                </NavLink>
              </nav>

              <div className="mt-4 flex items-center gap-2 border-t border-yellow-300/20 pt-4">
                {socialLinks.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-300/25 bg-black/20 text-neutral-300 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:bg-yellow-400/10 hover:text-yellow-200 hover:shadow-[0_10px_22px_rgba(250,204,21,0.25)]"
                  >
                    <SocialIcon name={icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
