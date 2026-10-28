import { motion } from "framer-motion"

export default function HoverCard3D({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}