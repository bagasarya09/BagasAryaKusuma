import { useEffect, useState } from "react"
import {
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
} from "react-icons/fi"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience & Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [active, setActive] = useState("")

  // Dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Active navbar scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      )

      sections.forEach((section) => {
        if (!section) return

        const top = window.scrollY
        const offset = section.offsetTop - 150
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (top >= offset && top < offset + height) {
          setActive(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed left-1/2 top-5 z-50 flex w-[95%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border-[3px] border-black glass px-6 py-4 shadow-[6px_6px_0_#111] dark:border-white dark:bg-zinc-900 dark:shadow-[6px_6px_0_#fff]">
        {/* Logo */}
        <div className="font-['Syne'] text-2xl font-extrabold dark:text-white">
          Bagas<span className="text-violet-600">.</span>
        </div>
        

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold transition ${
                active === link.href.replace("#", "")
                  ? "text-violet-600"
                  : "text-black dark:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-lime-300 text-xl shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-800 dark:text-white dark:shadow-[4px_4px_0_#fff]"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-pink-300 text-2xl shadow-[4px_4px_0_#111] md:hidden"
          >
            <FiMenu />
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl border-[3px] border-black bg-lime-300 px-5 py-3 font-bold shadow-[4px_4px_0_#111] md:block"
          >
            Hire Me ✦
          </a>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          open
            ? "pointer-events-auto bg-black/40 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[320px] border-l-[4px] border-black bg-white p-8 transition-transform duration-300 dark:border-white dark:bg-zinc-900 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold dark:text-white">
              Menu
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-pink-300 text-2xl shadow-[4px_4px_0_#111] dark:border-white"
            >
              <FiX />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl border-[3px] border-black px-5 py-4 text-lg font-bold shadow-[4px_4px_0_#111] transition hover:-translate-x-1 hover:-translate-y-1 dark:border-white dark:text-white ${
                  active === link.href.replace("#", "")
                    ? "bg-violet-500 text-white"
                    : "bg-white dark:bg-zinc-800"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}