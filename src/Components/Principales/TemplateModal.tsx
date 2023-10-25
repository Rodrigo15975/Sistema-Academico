
interface PropsTemplateModal {
  className?: string
  children?: React.ReactNode
}
const TemplateModal = ({ className, children }: PropsTemplateModal) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default TemplateModal
