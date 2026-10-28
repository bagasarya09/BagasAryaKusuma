const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Php",
  "SQL",
  "Bootstrap",
  "Tailwind CSS",
  "Laravel",
  "React.js",
  "Github",
  "Trello",
  "Notion",
  "Figma",
  "Canva",
  "Alight Motion",
  "Capcut",
  "Affinity",
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b-[5px] border-black bg-lime-300 px-6 py-28 dark:border-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 inline-block rounded-full border-[3px] border-black bg-white px-5 py-2 text-sm font-bold shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-950 dark:text-white dark:shadow-[4px_4px_0_#fff]">
          ✦ Skill Set
        </div>

        <h2 className="mb-5 text-5xl font-extrabold text-black dark:text-white">
          What I work with
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="rounded-xl border-[3px] border-black bg-white px-6 py-3 font-bold shadow-[4px_4px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:bg-violet-600 hover:text-white dark:border-white dark:bg-zinc-950 dark:text-white dark:shadow-[4px_4px_0_#fff] dark:hover:bg-violet-500"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}