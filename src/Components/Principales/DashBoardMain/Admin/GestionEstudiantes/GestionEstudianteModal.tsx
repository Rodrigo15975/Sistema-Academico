import { ReactNode } from "react"
interface Children {
  children: ReactNode
}
const GestionEstudianteModal: React.FC<Children> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default GestionEstudianteModal