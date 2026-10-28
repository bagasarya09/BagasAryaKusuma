import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { useRef, useState } from "react"

export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_x7f145v",
        "template_l5q5ofp",
        form.current,
        "UbQE0SLcb_CulrkLs"
      )
      .then(
      () => {
        toast.success("Message sent successfully 🚀", {
          style: {
            background: "#D9FF3F",
          },
        })

        setLoading(false)
      },
      () => {
        toast.error("Failed to send message 😢", {
          style: {
            background: "#F6C7CD",
          },
        })

        setLoading(false)
      }
    )
  }

  return (
    <section
      id="contact"
      className="border-t-[5px] border-black bg-[#FAFAF8] px-6 py-28 dark:border-white dark:bg-zinc-950"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <div className="mb-6 inline-block rounded-full border-[3px] border-black bg-white px-5 py-2 text-sm font-bold shadow-[4px_4px_0_#111] dark:border-white dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0_#fff]">
            ✦ Contact
          </div>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl dark:text-white">
            Let's build something
            <span className="block text-violet-600">
              amazing together.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-300">
            Have a project in mind or just want to say hi?
            Feel free to reach out anytime.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Email
              </div>

              <p className="text-lg font-bold dark:text-white">
                bagasaryakusuma09@gmail.com
              </p>
            </div>

            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Instagram
              </div>

              <p className="text-lg font-bold dark:text-white">
                @g4sss.9
              </p>
            </div>

            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Location
              </div>

              <p className="text-lg font-bold dark:text-white">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-[32px] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0_#111] dark:border-white dark:bg-zinc-900 dark:shadow-[8px_8px_0_#fff]"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] dark:text-white">
                Name
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full rounded-2xl border-[3px] border-black bg-zinc-50 px-5 py-4 font-semibold outline-none transition focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[5px_5px_0_#111] dark:border-white dark:bg-zinc-950 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] dark:text-white">
                Email
              </label>

              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full rounded-2xl border-[3px] border-black bg-zinc-50 px-5 py-4 font-semibold outline-none transition focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[5px_5px_0_#111] dark:border-white dark:bg-zinc-950 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] dark:text-white">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full rounded-2xl border-[3px] border-black bg-zinc-50 px-5 py-4 font-semibold outline-none transition focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[5px_5px_0_#111] dark:border-white dark:bg-zinc-950 dark:text-white"
              ></textarea>
            </div>

            <button
  type="submit"
  disabled={loading}
  className="
    w-full
    rounded-2xl
    border-[3px]
    border-black
    bg-lime-300
    px-8
    py-4
    font-extrabold
    shadow-[5px_5px_0_#111]
    transition
    hover:-translate-x-1
    hover:-translate-y-1
    hover:shadow-[8px_8px_0_#111]
    disabled:cursor-not-allowed
    disabled:opacity-70
  "
>
  {loading ? "Sending..." : "Send Message →"}
</button>

            <div className="rounded-3xl border-[3px] border-black bg-lime-300 p-6 shadow-[5px_5px_0_#111] dark:text-black">
              <div className="text-4xl">
                🚀
              </div>

              <h4 className="mt-4 text-2xl font-extrabold">
                Available for freelance
              </h4>

              <p className="mt-2 font-medium">
                Open for UI/UX, frontend, and web
                development projects.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}