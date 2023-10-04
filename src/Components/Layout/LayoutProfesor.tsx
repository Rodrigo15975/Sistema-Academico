import SiderBarAppProfesor from "../SiderBars/SiderBarProfesor/SiderBarAppProfesor"
const LayoutProfesor = ({ children }: LayoutProps) => {
  return (
    <main className="flex" >
      <SiderBarAppProfesor />
      {children}
    </main>
  )
}

export default LayoutProfesor
