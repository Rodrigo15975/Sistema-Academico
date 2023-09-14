import SiderBarAppProfesor from "../Components/SiderBarProfesor/SiderBarAppProfesor"


const LayoutProfesor: React.FC<LayoutProfesor> = ({ children }) => {
  return (
    <main className="flex" >
      <SiderBarAppProfesor />
      {children}
    </main>
  )
}

export default LayoutProfesor
