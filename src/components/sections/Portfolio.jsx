import { useState } from "react"
import { projects } from "../../data/projects"
import ProjectModal from "../modal/ProjectModal"
import HoverCard3D from "../ui/HoverCard3D"

const tabs = [
  { id: "web", label: "Web Developer" },
  { id: "design", label: "UI/UX Designer" },
  { id: "social", label: "Manage Social Media" },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState("web")
  const visibleProjects = projects.filter((project) => project.discipline === activeTab)

  function handleTabKeyDown(event, index) {
    let nextIndex
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (event.key === "Home") nextIndex = 0
    else if (event.key === "End") nextIndex = tabs.length - 1
    else return

    event.preventDefault()
    setActiveTab(tabs[nextIndex].id)
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex].focus()
  }

  return (
    <section
      id="portfolio"
      className="border-b-[5px] border-black bg-[#FAFAF8] px-6 py-28 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 inline-block rounded-full border-[3px] border-black bg-white px-5 py-2 text-sm font-bold shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_#fff]">
          ✦ Portfolio
        </div>

        <h2 className="mb-8 text-5xl font-extrabold dark:text-white">
          Selected Work
        </h2>

        <div role="tablist" aria-label="Selected Work categories" className="mb-12 flex flex-wrap gap-4">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              id={`portfolio-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`portfolio-panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`rounded-xl border-[3px] border-black px-5 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:border-white dark:focus-visible:outline-lime-300 ${
                activeTab === tab.id
                  ? "translate-x-[3px] translate-y-[3px] bg-lime-300 text-black shadow-none"
                  : "bg-white text-black shadow-[4px_4px_0_#111] hover:bg-violet-100 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_#fff] dark:hover:bg-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`portfolio-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`portfolio-tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:focus-visible:outline-lime-300"
          >
        {activeTab === tab.id && (visibleProjects.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <HoverCard3D key={project.id}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border-[3px] border-black bg-white shadow-[6px_6px_0_#111] transition duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[10px_10px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[6px_6px_0_#fff] dark:hover:shadow-[10px_10px_0_#fff]"
              >
                {/* IMAGE */}
             <div className="h-52 overflow-hidden border-b-[3px] border-black dark:border-white">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                />
            </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  {/* TAG */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-lg border-2 border-black bg-sky-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black">
                      {project.category}
                    </span>

                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-lg border-2 border-black bg-violet-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 text-2xl font-extrabold leading-tight">
                    {project.title}
                  </h3>

                  {/* DESC */}
                  <p className="mb-6 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.desc}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-auto flex items-center justify-between">
                    <a className="text-sm font-bold text-violet-600 dark:text-lime-300">
                      View Project →
                    </a>

                    <span className="text-xs font-bold text-zinc-400">
                        {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCard3D>
          ))}
        </div>
        ) : (
          <div className="rounded-[24px] border-[3px] border-dashed border-black/30 bg-white px-6 py-16 text-center dark:border-white/30 dark:bg-zinc-900">
            <p className="text-xl font-extrabold dark:text-white">No projects yet</p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">UI/UX design projects will be added here soon.</p>
          </div>
        ))}
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
