import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUserGraduate } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { SiGoogleclassroom } from "react-icons/si";
import React from "react";

type DataRutas = {
  readonly id: string,
  path: string,
  name: string,
  icon: React.JSX.Element
}

const rutaProfesores: DataRutas[] = [
  {
    id: "1",
    path: "/dashboard",
    name: "Dashboard",
    icon: <RxDashboard className="  text-2xl" />,
  },
  {
    id: "2",
    path: "/perfilProf",
    name: "Perfil",
    icon: <FaUserGraduate className="  text-2xl" />,
  },
  {
    id: "3",
    path: "/institucionProf",
    name: "Institución",
    icon: <LiaUniversitySolid className="  text-2xl" />,
  },
  {
    id: "4",
    path: "/aulasProf",
    name: "Aulas",
    icon: <SiGoogleclassroom className="  text-2xl" />,
  },
]
const LinksSiderBarProfesor = () => {
  return (
    <div className="flex flex-col text-white/50 gap-2 pl-4 pr-4 w-full" >
      <p className="text-colorGreen" >Menu</p>
      {rutaProfesores.map(links =>
        <NavLink
          className={`p-2 hover:outline-double hover:bg-white/10  rounded-md transition flex items-center  hover:text-white `}
          key={`ruta-${links.id}`}
          to={links.path} >
          {links.icon} {links.name}
        </NavLink>
      )}
    </div>
  )
}

export default LinksSiderBarProfesor
