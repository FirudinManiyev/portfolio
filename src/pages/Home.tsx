function Home() {
	return (
		<div className="min-h-screen to-black flex items-center justify-center p-6">
			<div className="max-w-md w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 shadow-2xl">
				<h1 className="text-3xl font-bold text-white">
					Salam 👋
				</h1>

				<p className="mt-3 text-slate-300">
					React + Tailwind CSS v4 uğurla işləyir.
				</p>

				<button className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95">
					Başla
				</button>
			</div>
		</div>
	)
}

export default Home