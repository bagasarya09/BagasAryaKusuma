  import profileimg from "../../assets/Profile.png"
  import HoverCardProfile from "../ui/HoverCardProfile"
  
  export default function About() {
  return (
    <section
      id="about"
      className="border-y-[5px] border-black bg-white px-6 py-28 dark:border-white dark:bg-zinc-950"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <div className="relative">
          <HoverCardProfile>
          <div className="relative mx-auto w-fit">
            
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"></div>

            <img
              src={profileimg}
              alt="Profile"
              className="relative z-10 w-[260px] animate-float object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:w-[340px]"
            />
          </div>
        </HoverCardProfile>

          <div className="absolute -bottom-3 -right-2 rounded-2xl border-[3px] text-white border-black bg-[#0A76D4] px-6 py-4 text-center font-bold shadow-[6px_6px_0_#111] dark:border-white dark:text-black dark:shadow-[6px_6px_0_#fff]">
            <span className="block text-3xl font-extrabold">2+</span>
            Years Experience
          </div>
        </div>

        <div>
          <div className="mb-6 inline-block rounded-full border-[3px] border-black bg-white px-5 py-2 text-sm font-bold shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_#fff]">
            ✦ About Me
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] text-black dark:text-white sm:text-5xl md:text-6xl">
            Crafting modern digital experiences
          </h2>

          <p className="mb-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
            UI/UX Designer, Frontend Developer & Social Media Creative creating modern digital experiences.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["5+", "Companies Managed"],
              ["2+", "Projects Designed"],
              ["100+", "Content Created"],
              ["3", "Awards"],
            ].map(([num, label], i) => (
              <div
                key={i}
                className="rounded-2xl border-[3px] border-black bg-zinc-50 p-5 shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_#fff]"
              >
                <h3 className="text-4xl font-extrabold">{num}</h3>
                <p className="font-semibold text-zinc-500 dark:text-zinc-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
