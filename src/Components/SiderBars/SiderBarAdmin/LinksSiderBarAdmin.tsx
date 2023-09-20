import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUserGraduate } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { GoReport } from "react-icons/go";
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
    path: "/gestionProfesores",
    name: "Gestión de Profesores",
    icon: <SiGoogleclassroom className="  text-2xl" />,
  },
  {
    id: "3",
    path: "/gestionEstudiantes",
    name: "Gestión de Estudiantes",
    icon: <HiOutlineUsers className="  text-2xl" />,
  },
  {
    id: "4",
    path: "/perfilAdmin",
    name: "Perfil",
    icon: <FaUserGraduate className="  text-2xl" />,
  },
  {
    id: "5",
    path: "/institucionAdmin",
    name: "Institución",
    icon: <LiaUniversitySolid className="  text-2xl" />,
  },
  {
    id: "6",
    path: "/reportes",
    name: "Reporte",
    icon: <GoReport className="  text-2xl" />,
  },
  // {
  //   id: "6",
  //   path: "/listadoAlumnos",
  //   name: "Lista de Alumnos",
  //   icon: <SiGoogleclassroom className="  text-2xl" />,
  // },
  // {
  //   id: "7",
  //   path: "/listadoProfesores",
  //   name: "Lista de Profesores",
  //   icon: <SiGoogleclassroom className="  text-2xl" />,
  // },
]

const LinksSiderBarAdmin = () => {
  return (
    <div className="flex flex-col text-white/50 pl-4 pr-4 w-full" >
      <p className="text-colorGreen" >Menu</p>
      {rutaProfesores.map(links =>
        <NavLink
          className={`p-2 gap-1 hover:outline-double mt-2 font-thin hover:bg-white/10 rounded-md transition flex items-center hover:text-white`}
          key={`ruta-${links.id}`}
          to={links.path} >
          {links.icon} {links.name}
        </NavLink>
      )
      }
    </div>
  )
}
export default LinksSiderBarAdmin