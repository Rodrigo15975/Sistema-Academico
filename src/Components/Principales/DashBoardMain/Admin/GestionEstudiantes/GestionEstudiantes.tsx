import { BiSolidUserCheck, BiSolidUserDetail } from "react-icons/bi"
import { HiOutlineUsers } from "react-icons/hi"
import logo from "./img/logoAcademy.svg";
const gestionesOptions = [
  {
    id: "01",
    name: "Matricula Abierta",
    styleClass: "animate-fade animate-ease-in-out before:absolute before:h-full before:w-[1.5rem] before:left-0 before:rounded-tl-3xl before:bg-[#157AFF] before:w-[1.5rem] rounded-tl-3xl rounded-br-3xl",
    icon: <BiSolidUserDetail className="text-4xl text-white bg-[#2386ff]  rounded-lg" />
  },
  {
    id: "02",
    name: "Estudiantes Matriculados",
    styleClass: "animate-fade animate-delay-200 animate-ease-in-out before:absolute before:h-full before:w-[1.5rem] before:right-0 before:rounded-tr-3xl before:bg-[#36D9D8] before:w-[1.5rem] rounded-tr-3xl rounded-bl-3xl",
    icon: <BiSolidUserCheck className="text-4xl text-white bg-[#2386ff] rounded-lg" />
  },

]


const GestionEstudiantes = () => {
  return (
    <div className="w-full flex flex-col" >
      <div className="bg-titleDashboards p-8 text-2xl gap-2 flex items-center text-white shadow-lg" >
        <p className="flex items-center gap-2" >Gestión Estudiantes
          <HiOutlineUsers />
        </p>
      </div>

      <div className="p-4 flex items-center justify-center">
        <div className="flex-[0_1_100rem] min-h-[85vh] flex items-center justify-center px-4 bg-blue-300/30 gap-5 rounded-lg">
          {gestionesOptions.map(options =>
            <div key={options.id} className={`relative ${options.styleClass} shadow-xl flex items-center justify-center shadow-black/20 hover:-translate-y-4 transition hover:shadow-none cursor-pointer flex-[0_1_33.75rem] min-h-[43rem] bg-white`}>
              <img src={logo} alt="" className="absolute h-[7rem] w-[7rem] -right-2 -top-10 bg-white border rounded-full" />
              <div className="flex-[0_1_25rem] min-h-[5rem] flex items-center justify-center">
                <p className=" items-center justify-center text-2xl text-[#2386ff;] gap-3 flex undeline">
                  {options.icon}
                  {options.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default GestionEstudiantes
