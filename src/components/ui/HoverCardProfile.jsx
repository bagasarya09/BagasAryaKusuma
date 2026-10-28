import { useRef } from "react"

export default function HoverCardProfile({
  children,
}) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current

    if (!card) return

    const rect = card.getBoundingClientRect()

    const x =
      e.clientX - rect.left - rect.width / 2

    const y =
      e.clientY - rect.top - rect.height / 2

    const rotateX = -(y / 25)
    const rotateY = x / 25

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03,1.03,1.03)
    `
  }

  const handleMouseLeave = () => {
    const card = cardRef.current

    if (!card) return

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1,1,1)
    `
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transform-gpu transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  )
}