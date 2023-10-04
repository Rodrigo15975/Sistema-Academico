import { FaUserCheck } from "react-icons/fa";
import PanelProfesores from "./PanelDeProfesores/PanelProfesores";
import BusquedaDeProfesores from "./BusquedaDeProfesores";
const GestionProfesores = () => {
  return (
    <div className="w-full flex flex-col" >
      <div>
        <p className="bg-titleDashboards p-8 text-2xl gap-2 shadow-md flex items-center text-white" >Gestión Profesores
          <FaUserCheck />
        </p>
      </div>
      <div className="p-4 bg-black/5" >
        <div className="flex justify-between p-4 bg-white/90 rounded-xl" >
          <BusquedaDeProfesores />
        </div>
        <div className="min-h-[77vh] mt-4">
          <PanelProfesores />
        </div>
      </div>
    </div>
  )
}

export default GestionProfesores
