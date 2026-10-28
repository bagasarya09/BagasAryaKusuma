import AnimatedBlobs from "../ui/AnimatedBlobs"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-[5px] border-black bg-pink-200 px-6 pb-24 pt-40 dark:border-white dark:bg-zinc-950"
    >
      {/* Animated Background */}
      <AnimatedBlobs />

      {/* Doodles */}
      <div className="absolute left-[8%] top-[18.5%] animate-bounce  text-4xl">
        ✦
      </div>

      <div className="absolute right-[10%] top-[24%] animate-pulse text-3xl">
        ◎
      </div>

      <div className="absolute bottom-[40%] left-[12%] animate-bounce text-2xl delay-300">
        ⬟
      </div>

      <div className="absolute right-[8%] top-[60%] animate-pulse text-3xl delay-500">
        ✧
      </div>

      <div className="absolute bottom-[40%] right-[20%] animate-bounce text-xl delay-700">
        ◈
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-3 rounded-full border-[3px] border-black bg-mint px-5 py-3 font-bold shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-800 dark:text-white dark:shadow-[4px_4px_0_#fff]">
          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500"></span>
          Available for freelance work
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-7xl lg:text-8xl dark:text-white">
          Building{" "}
          <span className="text-violet-600">seamless</span>
          <br />
          digital{" "}
          <span className="text-orange-500">
            experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">
         Frontend Developer & UI/UX Designer creating modern interfaces with strong visuals, smooth interactions, and meaningful user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
          <a
            href="/PortofolioDesign.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto rounded-2xl border-[3px] border-black bg-lime-300 px-8 py-4 text-lg font-bold shadow-[6px_6px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111] dark:border-white dark:shadow-[6px_6px_0_#fff]"
          >
            Download Portfolio ↓
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto rounded-2xl border-[3px] border-black bg-violet-600 px-8 py-4 text-lg font-bold text-white shadow-[6px_6px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111] dark:border-white dark:shadow-[6px_6px_0_#fff]"
          >
            Let's Talk ✉
          </a>
        </div>

        {/* Mockup */}
        <div className="glass mt-20 w-full max-w-6xl overflow-hidden rounded-[32px] border-[5px] border-black bg-white shadow-[10px_10px_0_#111] dark:border-white dark:bg-zinc-900 dark:shadow-[10px_10px_0_#fff]">
          {/* Browser Top */}
          <div className="flex items-center gap-3 border-b-[3px] border-black bg-zinc-100 px-6 py-4 dark:border-white dark:bg-zinc-800">
            <div className="h-4 w-4 rounded-full border-2 border-black bg-red-400"></div>

            <div className="h-4 w-4 rounded-full border-2 border-black bg-yellow-300"></div>

            <div className="h-4 w-4 rounded-full border-2 border-black bg-green-400"></div>

            <div className="ml-4 flex-1 rounded-xl border-2 border-black bg-white px-5 py-2 text-left text-sm font-semibold text-zinc-500 dark:border-white dark:bg-zinc-900 dark:text-zinc-400">
              bagasexperience.dev
            </div>
          </div>

          {/* Mockup Body */}
          <div className="grid gap-5 p-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-3xl border-[3px] border-black bg-sky-200 p-6 shadow-[5px_5px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#111] dark:border-white dark:shadow-[5px_5px_0_#fff]">

              <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-600">
                Companies Worked With
              </div>

              <div className="text-4xl font-extrabold">
                5+
              </div>

              <div className="mt-4 h-2 w-3/4 rounded-full bg-black dark:bg-white"></div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border-[3px] border-black bg-violet-200 p-6 shadow-[5px_5px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#111] dark:border-white dark:shadow-[5px_5px_0_#fff]">

              <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-600 ">
                UI/UX Projects Completed
              </div>

              <div className="text-4xl font-extrabold">
                2+
              </div>

              <div className="mt-4 h-2 w-2/3 rounded-full bg-black dark:bg-white"></div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border-[3px] border-black bg-yellow-200 p-6 shadow-[5px_5px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#111] dark:border-white dark:shadow-[5px_5px_0_#fff]"> 

              <div className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-600">
                Creative Content Designed
              </div>

              <div className="text-4xl font-extrabold">
                100+
              </div>

              <div className="mt-4 h-2 w-1/2 rounded-full bg-black dark:bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}