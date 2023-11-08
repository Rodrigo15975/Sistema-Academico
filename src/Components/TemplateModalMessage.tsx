
interface PropsTemplateModalMessage {
  text: string
  className: string
  classNameChildren: string
  children?: React.ReactNode
}
const TemplateModalMessage = ({ className, children, text, classNameChildren }: PropsTemplateModalMessage) => {
  return (
    <div className={className}>
      <p className={classNameChildren}>{text}
        {children}
      </p>
    </div>
  )
}

export default TemplateModalMessage
