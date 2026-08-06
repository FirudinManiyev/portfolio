import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="bg-linear-to-br from-sky-50 via-yellow-200 to-yellow-200 bg-clip-text text-8xl font-black text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.22)] sm:text-9xl">
            404
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-yellow-400/10 blur-2xl" />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Səhifə Tapılmadı
        </h1>

        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-yellow-400">
          Ünvanı yoxlayın
        </p>

        <p className="mx-auto mb-12 max-w-lg text-base text-neutral-400 sm:text-lg">
          Axtardığın səhifə mövcud deyil və ya bu ünvan artıq dəyişdirilmiş ola bilər.
        </p>

        <Link
          to="/"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-yellow-400 to-yellow-300 px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:shadow-lg hover:shadow-yellow-400/50"
        >
          <span className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="relative flex items-center gap-2">
            Ana Səhifəyə Qayıt
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>

        <p className="mt-12 text-xs text-neutral-500">
          Problemin davam etdiyi halda{" "}
          <Link to="/contact" className="text-yellow-400 transition hover:text-yellow-300">
            bizimlə əlaqə saxla
          </Link>
        </p>
      </div>

      <div className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-yellow-400/30" />
      <div className="absolute right-10 top-20 h-3 w-3 rounded-full bg-yellow-400/20" />
    </div>
  )
}

export default NotFoundPage
