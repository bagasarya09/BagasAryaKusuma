export default function Footer() {
  return (
    <footer className="border-t-[5px] border-black bg-black px-6 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-3 text-4xl font-extrabold">
            Bagas<span className="text-violet-500">.</span>
          </h2>

          <p className="max-w-md text-zinc-400">
            Frontend Developer & UI/UX Designer creating modern interfaces with strong visuals, smooth interactions, and meaningful user experiences.          </p>
        </div>

        <div className="flex gap-5">
          <a href="https://github.com/bagasarya09" className="font-bold hover:text-lime-300">
            Github
          </a>

          <a href="https://www.instagram.com/g4sss.9" className="font-bold hover:text-lime-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}