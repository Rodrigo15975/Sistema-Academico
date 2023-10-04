import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
// import { FaUserGraduate } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { GoReport } from "react-icons/go";
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
    icon: <RxDashboard />,
    className: "animate-fade animate-ease-linear"
  },
  {
    id: "02",
    path: "/dashboard/admin/gestionProfesores",
    name: "Gestión Profesores",
    icon: <SiGoogleclassroom />,
    className: "animate-fade animate-delay-200 animate-ease-linear"
  },
  {
    id: "03",
    path: "/dashboard/admin/gestionEstudiantes",
    name: "Gestión Estudiantes",
    icon: <HiOutlineUsers />,
    className: "animate-fade animate-delay-300 animate-ease-linear"
  },
  // {
  //   id: "04",
  //   path: "/dashboard/admin/gestionAuxiliares",
  //   name: "Gestión Auxiliares",
  //   icon: <HiOutlineUsers />,
  //   className: "animate-fade animate-delay-[400ms] animate-ease-linear"
  // },
  {
    id: "04",
    path: "/dashboard/admin/institucion",
    name: "Institución",
    icon: <LiaUniversitySolid />,
    className: "animate-fade animate-delay-[600ms] animate-ease-linear"
  },
  {
    id: "05",
    path: "/dashboard/admin/reporte",
    name: "Reporte",
    icon: <GoReport />,
    className: "animate-fade animate-delay-[700ms] animate-ease-linear"
  },
  {
    id: "06",
    path: "/dashboard/admin/perfil",
    name: "Perfil",
    icon: <CgProfile/>,
    className: "animate-fade animate-delay-[500ms] animate-ease-linear"
  },
]

const LinksSiderBarAdmin = () => {
  return (
    <div className="flex flex-col w-full gap-2 overflow-hidden" >
      {rutaProfesores.map(links =>
        <NavLink
          className={`focus:scale-105 ${links.className} gap-4 h-[3rem] px-2 font-thin transition hover:bg-[#d6ebff] border-b border-[#2386ff] text-[#2386ff] flex items-center`}
          key={`ruta-${links.id}`}
          to={links.path} >
          {links.icon} {links.name}
        </NavLink>
      )}
    </div>
  )
}
export default LinksSiderBarAdmin