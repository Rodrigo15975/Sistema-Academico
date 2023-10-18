import { m } from "framer-motion"

interface Children {
  children: React.ReactNode
}

const ModalTemplateGestiones = ({ children }: Children) => {
  return (
    <m.div initial={{ scale: 0.5 , opacity: 0}} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 ,scale:0.5 }} className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-end" >{children}</m.div>
  )
}

export default ModalTemplateGestiones