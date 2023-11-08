import { BiSolidUserAccount } from "react-icons/bi"
import FiltradosListEstudiante from "./FiltradosListEstudiante"
import PanelAppListEstudiantes from "./PanelAppListEstudiantes"

const AppListEstudiantes = () => {
  return (
    <div className="flex flex-col w-full" >
      <div className="p-8 text-2xl text-white bg-titleDashboards">
        <p className="flex items-center gap-2">Lista de Estudiantes <BiSolidUserAccount
        />
        </p>
      </div>
      <div className="min-h-[90vh] flex flex-col gap-4 p-4">
        <div className="flex-[0_1_5rem] shadow-sm rounded-md flex items-center p-4" >
          <FiltradosListEstudiante />
        </div>
        <div className="flex-[0_1_45rem] border" >
          <PanelAppListEstudiantes />
        </div>
      </div>
    </div>
  )
}

export default AppListEstudiantes