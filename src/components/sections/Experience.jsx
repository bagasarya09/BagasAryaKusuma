import { useState } from "react"
import { experiences } from "../../data/experience"
import { education } from "../../data/education"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience")

  const currentData =
    activeTab === "experience"
      ? experiences
      : education

  return (
    <section
      id="experience"
      className="border-b-[5px] border-black bg-sky-100 px-6 py-28 dark:border-white dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl">
        {/* Tag */}
        <div className="mb-6 inline-block rounded-full border-[3px] border-black bg-white px-5 py-2 text-sm font-bold shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_#fff]">
          ✦ Experience & Journey
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-none tracking-[-0.04em] dark:text-white sm:text-5xl md:text-7xl">              
                {activeTab === "experience"
                ? "Where I've worked"
                : "Education journey"}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {activeTab === "experience"
                ? "My professional journey across frontend development, UI/UX design, and creative digital projects."
                : "My educational background and learning journey in technology and design."}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex w-full items-center gap-3 sm:w-fit rounded-2xl border-[3px] border-black bg-white p-2 shadow-[5px_5px_0_#111] dark:border-white dark:bg-zinc-900 dark:shadow-[5px_5px_0_#fff]">
            <button
              onClick={() =>
                setActiveTab("experience")
              }
              className={`rounded-xl w-full px-5 py-3 text-sm font-bold transition ${
                activeTab === "experience"
                  ? "bg-lime-300 text-black"
                  : "text-zinc-500 dark:text-zinc-300"
              }`}
            >
              Experience
            </button>

            <button
              onClick={() =>
                setActiveTab("education")
              }
              className={`rounded-xl w-full px-5 py-3 text-sm font-bold transition ${
                activeTab === "education"
                  ? "bg-violet-300 text-black"
                  : "text-zinc-500 dark:text-zinc-300"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="absolute left-[18px] top-0 h-full w-[4px] rounded-full bg-black dark:bg-white"></div>

          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div
                key={index}
                className="relative pl-14 sm:pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-2 h-10 w-10 rounded-full border-[3px] border-black ${item.color} shadow-[3px_3px_0_#111] dark:border-white dark:shadow-[3px_3px_0_#fff]`}
                ></div>

                {/* Content */}
                <div className="min-w-0 overflow-hidden rounded-[28px] border-[3px] border-black bg-white p-5 shadow-[6px_6px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[6px_6px_0_#fff] sm:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                {/* Year */}
                <div className="rounded-full border-2 border-black bg-yellow-200 px-4 py-1 text-sm font-bold dark:border-white dark:text-black">
                    {item.year}
                </div>

                {/* Category */}
                <div
                    className={`rounded-full border-2 border-black px-4 py-1 text-sm font-bold dark:border-white dark:text-black ${
                    item.categoryColor || "bg-lime-300"
                    }`}
                >
                    {item.category}
                </div>
                </div>

                  {/* Title */}
                  <h3 className="break-words text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl">
                    {activeTab === "experience"
                      ? item.role
                      : item.school}
                  </h3>

                  {/* Company / Major */}
                  <div className="mt-2 text-lg font-bold text-violet-600 dark:text-lime-300">
                    {activeTab === "experience"
                      ? item.company
                      : item.major}
                  </div>

                  {/* Desc */}
                  <p className="mt-5 break-words text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}