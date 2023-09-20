import { FcSearch } from "react-icons/fc";
import { BsPersonAdd } from "react-icons/bs";
const BusquedaDeProfesores = () => {
  return (
    <>
      <div className="flex-[0_1_20rem] relative min-h-[2.5rem]" >
        <input type="text" placeholder="Busqueda" className="absolute p-2 focus:bg-blue-100 pl-[2rem] w-full border border-black/50 rounded-3xl outline-none" />
        <FcSearch className="absolute right-4 top-3" />
      </div>
      <div className="flex flex-[0_1_15rem] items-center justify-center">
        <button className="bg-[#FFD645] rounded-lg w-full hover:bg-white hover:outline-double h-full flex items-center justify-center gap-3 transition duration-200" >
          <BsPersonAdd className="text-3xl" />
          Nuevo Profesor
        </button>
      </div>
    </>
  )
}

export default BusquedaDeProfesores
