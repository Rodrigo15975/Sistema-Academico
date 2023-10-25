interface PropsBtnDiv {
  setUpdate: () => void
  className?: string
  children?: React.ReactNode
}

const ButtonDiv = ({ className, children, setUpdate }: PropsBtnDiv) => {
  return (
    <>
      <div onClick={setUpdate} className={className}>
        {children}
      </div>
    </>
  )
}

export default ButtonDiv
