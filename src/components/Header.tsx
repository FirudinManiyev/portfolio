import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/blog", label: "Bloq" },
  { to: "/contact", label: "Contact" },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-400/20 bg-neutral-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-lg font-semibold tracking-[0.25em] text-yellow-400 uppercase">
          Firudin Maniyev
        </NavLink>

        <nav className="hidden flex-wrap items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm transition-all duration-200",
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header