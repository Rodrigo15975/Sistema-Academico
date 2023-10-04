import { HiOutlineUsers } from "react-icons/hi"

const GestionAuxiliares = () => {
  return (
    <div className="w-full flex flex-col" >
      <div className="bg-titleDashboards p-8 text-2xl gap-2 shadow-md flex items-center">
        <p className="flex items-center gap-2 text-white">Gestión de Auxiliares
          <HiOutlineUsers/>
        </p>
      </div>
    </div>
  )
}

export default GestionAuxiliares
