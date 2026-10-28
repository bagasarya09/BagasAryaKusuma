import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    let mouseX = 0
    let mouseY = 0

    let currentX = 0
    let currentY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", moveCursor)

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18
      currentY += (mouseY - currentY) * 0.18

      cursor.style.transform = `
        translate(${currentX}px, ${currentY}px)
        translate(-50%, -50%)
      `

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      )
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 rounded-full border-[3px] border-black bg-lime-300 md:block"
    />
  )
}