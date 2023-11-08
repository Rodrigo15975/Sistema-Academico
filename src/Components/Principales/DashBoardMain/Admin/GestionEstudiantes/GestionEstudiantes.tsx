import { BiSolidUserCheck, BiSolidUserDetail } from "react-icons/bi"
import { HiOutlineUsers } from "react-icons/hi"
import logo from "./img/logoAcademy.svg";
import { useState } from 'react';
import TemplateMatriculas from "./TemplateMatriculas";
import ModalTemplateGestiones from "./ModalTemplateGestiones";
import Matriculados from "./Matriculados/Matriculados";
import MatriculasAbiertas from "./MatriculasAbiertas/MatriculasAbiertas";

const matriculasAbiertas = {
  id: "01",
  name: "Matricula Abierta",
  styleClass: "animate-fade animate-ease-in-out before:absolute before:h-full before:w-[1.5rem] before:left-0 before:rounded-tl-3xl before:bg-[#157AFF] before:w-[1.5rem] rounded-tl-3xl rounded-br-3xl",
  icon: <BiSolidUserDetail className="text-4xl text-white bg-[#2386ff]  rounded-lg" />,
  logo
}

const matriculadoLista = {
  id: "02",
  name: "Estudiantes Matriculados",
  styleClass: "animate-fade animate-delay-200 animate-ease-in-out before:absolute before:h-full before:w-[1.5rem] before:right-0 before:rounded-tr-3xl before:bg-[#36D9D8] before:w-[1.5rem] rounded-tr-3xl rounded-bl-3xl",
  icon: <BiSolidUserCheck className="text-4xl text-white bg-[#2386ff] rounded-lg" />,
  logo
}

const GestionEstudiantes = () => {
  const [matriculaAbierta, setMatriculaAbierta] = useState(false);
  const [matriculados, setMatriculados] = useState(false);

  //Matricula abierta registro
  const openMatriculAbierta = () => setMatriculaAbierta(!matriculaAbierta)
  //matriculados registro
  const openMatriculados = () => setMatriculados(!matriculados)


  return (
    <>
      <div className="w-full flex flex-col" >
        <div className="bg-titleDashboards p-8 text-2xl gap-2 flex items-center text-white shadow-lg" >
          <p className="flex items-center gap-2" >Gestión Estudiantes
            <HiOutlineUsers />
          </p>
        </div>
        <div className="p-4 bgMatriculas flex items-center justify-center">
          <div className="flex-[0_1_100rem] min-h-[85vh] flex items-center justify-center px-4 gap-5 rounded-lg">
            <TemplateMatriculas onClicked={openMatriculAbierta} options={matriculasAbiertas} />
            <TemplateMatriculas onClicked={openMatriculados} options={matriculadoLista} />
          </div>
        </div>
      </div>
      {matriculaAbierta &&
        <ModalTemplateGestiones>
          <MatriculasAbiertas clicked={openMatriculAbierta} />
        </ModalTemplateGestiones>
      }
      {matriculados &&
        <aside className="fixed inset-0 flex items-center animate-fade-down animate-once animate-duration-1000 animate-ease-in-out px-4 justify-center z-50 backdrop-blur-sm bg-white/20">
          <Matriculados clicked={openMatriculados} />
        </aside>
      }
    </>
  )
}

export default GestionEstudiantes
