import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-yellow-400">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Səhifə tapılmadı
      </h1>
      <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
        Axtardığın səhifə mövcud deyil və ya ünvan səhv yazılıb.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
      >
        Ana səhifəyə qayıt
      </Link>
    </section>
  )
}

export default NotFoundPage