import { AnimatePresence, m } from "framer-motion";
interface Children {
  children: React.ReactNode
 }
const AnimationModal: React.FC<Children> = ({ children }) => {
  return (
    <AnimatePresence>
      <m.div
        className="flex fixed inset-0 justify-center items-center z-50 "
        key={`modal`}
        initial={{ scale: 0, }}
        animate={{ scale: 1, }}
        exit={{ scale: 0 ,}}
        transition={{duration: 0.3}}
      >
        {children}
      </m.div>
    </AnimatePresence>
  )
}

export default AnimationModal
