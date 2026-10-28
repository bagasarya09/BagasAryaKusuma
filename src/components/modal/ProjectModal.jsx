import { motion, AnimatePresence } from "framer-motion"

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-10 w-full max-w-3xl rounded-[28px] border-[5px] border-black bg-white shadow-[10px_10px_0_#111]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
            >
              ✕
            </button>

            <div className="p-5 sm:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-lg border-2 border-black bg-violet-200 px-3 py-1 text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="pr-12 text-2xl font-extrabold sm:text-4xl">
                {project.title}
              </h2>
            </div>

            <div className="px-5 pb-5 pt-0 sm:px-8 sm:pb-8">
              <div
                className={`mb-6 flex h-52 sm:h-64 items-center justify-center overflow-hidden rounded-2xl border-[3px] border-black text-8xl ${project.bg}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mb-6 text-sm text-zinc-600 sm:text-base">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl border-[3px] border-black bg-lime-300 px-6 py-3 text-sm font-bold shadow-[4px_4px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 sm:text-base"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}