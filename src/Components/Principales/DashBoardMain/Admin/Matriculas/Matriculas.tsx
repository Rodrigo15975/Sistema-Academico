import { FaUserGraduate } from "react-icons/fa"

const Matriculas = () => {
  return (
    <div className="w-full flex flex-col" >
      <div className="bg-titleDashboards p-8 text-2xl gap-2 shadow-md flex items-center text-white ">
        <p className="flex items-center gap-3">Gestión de Matriculas
          <FaUserGraduate />
        </p>
      </div>
    </div>
  )
}

export default Matriculas