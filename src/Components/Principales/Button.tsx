import React from "react"
interface PropsButton {
  clicked: () => void
  children: React.ReactNode
  styleClass: string
}
const Button: React.FC<Partial<PropsButton>> = ({ clicked, children, styleClass }) => {
  return (
    <button type="button" onClick={clicked} className={styleClass}  >
      {children}
    </button>
  )
}

export default Button