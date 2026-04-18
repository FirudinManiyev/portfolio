import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t border-yellow-400/20 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm text-neutral-300">Firudin Maniyev Portfolio</p>
          <p className="mt-1 text-xs text-neutral-500">React + TypeScript + Tailwind v4</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <NavLink to="/about" className="text-neutral-400 transition hover:text-yellow-400">
            About
          </NavLink>
          <NavLink to="/projects" className="text-neutral-400 transition hover:text-yellow-400">
            Projects
          </NavLink>
          <NavLink to="/contact" className="text-neutral-400 transition hover:text-yellow-400">
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer