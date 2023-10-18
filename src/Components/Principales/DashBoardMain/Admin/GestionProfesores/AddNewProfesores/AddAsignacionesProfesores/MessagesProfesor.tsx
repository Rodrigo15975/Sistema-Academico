import { ReactNode } from "react"

interface Children {
  children?: ReactNode,
  title?: string
  className?: string
}

const MessagesProfesor = ({ children, className, title }: Children) => {
  return (
    <div className={`${className}`}>
      <p>{title}
        {children}
      </p>
    </div>
  )
}

export default MessagesProfesor
