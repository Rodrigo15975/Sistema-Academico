import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
// import { FaUserGraduate } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
// import { GoReport } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import React from "react";
type DataRutas = {
  readonly id: string,
  path: string,
  name: string,
  icon: React.JSX.Element,
  className?: string
}
const rutaProfesores: DataRutas[] = [
  {
    id: "01",
    path: "/dashboard-admin",
    name: "Dashboard",
    icon: <RxDashboard className="text-xl" />,
    className: "animate-fade animate-ease-linear"
  },
  {
    id: "02",
    path: "/dashboard/admin/gestionProfesores",
    name: "Gestión Profesores",
    icon: <SiGoogleclassroom className="text-xl" />,
    className: "animate-fade animate-delay-200 animate-ease-linear"
  },
  {
    id: "03",
    path: "/dashboard/admin/gestionEstudiantes",
    name: "Gestión Estudiantes",
    icon: <HiOutlineUsers className="text-xl" />,
    className: "animate-fade animate-delay-300 animate-ease-linear"
  },
  {
    id: "07",
    path: "/dashboard/admin/add-cursos",
    name: "Gestión de Cursos",
    icon: <CgProfile className="text-xl" />,
    className: "animate-fade animate-delay-[500ms] animate-ease-linear"
  },
  {
    id: "87",
    path: "/dashboard/admin/add-admin",
    name: "Gestión de Admin",
    icon: <CgProfile className="text-xl" />,
    className: "animate-fade animate-delay-[500ms] animate-ease-linear"
  },
  {
    id: "04",
    path: "/dashboard/admin/lista-estudiantes",
    name: "Lista de estudiantes",
    icon: <HiOutlineUsers />,
    className: "animate-fade animate-delay-[400ms] animate-ease-linear"
  },
  {
    id: "05",
    path: "/dashboard/admin/institucion",
    name: "Institución",
    icon: <LiaUniversitySolid className="text-xl" />,
    className: "animate-fade animate-delay-[600ms] animate-ease-linear"
  },
  // {
  //   id: "05",
  //   path: "/dashboard/admin/reporte",
  //   name: "Reporte",
  //   icon: <GoReport className="text-xl" />,
  //   className: "animate-fade animate-delay-[700ms] animate-ease-linear"
  // },
  {
    id: "06",
    path: "/dashboard/admin/perfil",
    name: "Perfil",
    icon: <CgProfile className="text-xl" />,
    className: "animate-fade animate-delay-[500ms] animate-ease-linear"
  },
  
]

const LinksSiderBarAdmin = () => {
  return (
    <div className="flex flex-col w-full gap-4 mt-2 overflow-hidden px-2 h-full" >
      {rutaProfesores.map(links =>
        <NavLink
          className={`${links.className} gap-3 h-[3rem] pl-4 pr-4 mt-2 transition focus:-translate-y-2 bg-blue-500/50 hover:scale-105 text-white border rounded-full shadow-lg flex items-center`} key={`ruta-${links.id}`}
          to={links.path} >
          {links.icon} {links.name}
        </NavLink>
      )}
    </div>
  )
}
export default LinksSiderBarAdmin