import { ReactNode } from "react"
import Button from "../../../Button"

interface PropsHeaderGestionEstudiantes {
  title: string,
  icon: ReactNode
  cliCked: () => void
}



const HeaderGestioneEstudiantes = ({ icon, title,cliCked }: PropsHeaderGestionEstudiantes) => {
  return (
    <div className="shadow-md relative h-[6rem] p-6 flex items-center bg-titleDashboards">
      <p className="text-2xl flex items-center underline-offset-2 underline justify-center gap-3 text-white">{title}
        {icon}
      </p>
      <Button clicked={cliCked} styleClass="bg-white text-xl absolute text-black rounded-lg right-2 top-2 h-[3rem] w-[3rem]">
        X
      </Button>
    </div>
  )
}

export default HeaderGestioneEstudiantes
