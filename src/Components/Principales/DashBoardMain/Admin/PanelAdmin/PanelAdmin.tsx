
import "@emotion/styled";
import "@mui/styled-engine";
import { useState } from 'react';
import BarGraficoProfesores from './Graficos/BarGraficoProfesores';
import CircleGraf from './Graficos/CircleGraf';
import BarGraficoAdmins from './Graficos/BarGraficoAdmins';
import GraficoEstudiantes from "./Graficos/GraficosEstudiantes";
import GraficoEstudiantesMatriculados from "./Graficos/GraficoMatriculados";
import AddNewProfesor from "../GestionProfesores/AddNewProfesores/AddNewProfesor";
import { FaUserCog } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import FormGestionCursos from "../GestionCursos/FormGestionCursos";
import TemplateModalAnimation from "../../../../TemplateModalAnimation";
import { AnimatePresence } from "framer-motion";
import FormAddGestionAdmins from "../GestionAdmin/FormAddGestionAdmins/FormAddGestionAdmins";
import MatriculasAbiertas from "../GestionEstudiantes/MatriculasAbiertas/MatriculasAbiertas";

const PanelAdmin = () => {
  const [newProfesor, setNewProfesor] = useState<boolean>(false);
  const [newCurso, setNewCurso] = useState(false);
  const [addAdmins, setdAdmins] = useState(false);
  const [matriculaAbierta, setMatriculaAbierta] = useState(false);
  const openMatriculAbierta = () => setMatriculaAbierta(!matriculaAbierta)
  const openModalNewProfesor = () => {
    setNewProfesor(!newProfesor)
  };
  const openModalNewCurso = () => {
    setNewCurso(!newCurso)
  };
  const openAddModalAdmins = () => {
    setdAdmins(!addAdmins)
  };
  return (
    <div className="w-[100%] desktop:flex-wrap flex font-titleFontLogin " >
      <div className='flex-[0_1_50rem] gap-2 p-4 justify-evenly items-center flex flex-col border-r min-h-[80vh] '>
        <div className='flex-[0_1_15rem] animate-fade-right w-full rounded-3xl bg-blue-500/10 hover:shadow-blue-500/50 transition hover:border-green-300/50  shadow-md flex justify-center items-center border' >
          <CircleGraf />
        </div>
        <div className='flex-[0_1_15rem] w-full animate-fade-right rounded-3xl animate-delay-200  bg-blue-500/10 hover:shadow-blue-500/50 transition hover:border-green-300/50 shadow-md flex justify-center items-center border' >
          <BarGraficoAdmins />
        </div>
        <div className='flex-[0_1_15rem] w-full rounded-3xl animate-fade-right animate-delay-300  bg-blue-500/10 hover:shadow-blue-500/50 transition hover:border-green-300/50 shadow-md flex justify-center items-center border' >
          <BarGraficoProfesores />
        </div>
      </div>
      <div className='p-4 flex-[0_1_50rem] flex gap-4 flex-col'>
        <div className="flex animate-fade animate-once border shadow-md rounded-2xl p-2">
          <GraficoEstudiantes />
          <GraficoEstudiantesMatriculados />
        </div>
        <div className="p-4 flex items-center flex-col justify-center gap-2 animate-fade-down animate-once animate-delay-500  min-h-[38rem] rounded-3xl border-blue-400/50 shadow-xl border">
          <div className="flex-[0_1_12rem] flex gap-2 justify-center items-center w-full rounded-3xl">
            <div className="flex flex-[0_1_20rem] min-h-[25vh] rounded-2xl" >
              <button
                onClick={openModalNewProfesor}
                className="w-full bg-green-300/10 hover:bg-green-300  flex justify-center items-center gap-2 transition shadow-md rounded-3xl hover:border border-black ">
                <FaUserCog className="text-2xl" />
                Nuevo Profesor
              </button>
            </div>
            <div className="flex flex-[0_1_20rem] min-h-[25vh] rounded-2xl " >
              <button onClick={openModalNewCurso} className="w-full bg-rose-600/10 hover:bg-rose-600 flex justify-center items-center gap-2   transition shadow-md rounded-3xl hover:border border-black ">
                <BsFillBookmarkStarFill className="text-2xl" />
                Nuevo Curso
              </button>
            </div>
          </div>
          <div className="flex-[0_1_12rem] flex gap-2 justify-center items-center w-full rounded-3xl">
            <div className="flex flex-[0_1_20rem] min-h-[25vh] rounded-2xl" >
              <button onClick={openAddModalAdmins} className="w-full bg-[#3549ff]/10 hover:bg-[#3549ff]  flex justify-center items-center gap-2 transition shadow-md rounded-3xl hover:border border-black " >
                <MdOutlineAdminPanelSettings className="text-2xl" />
                Nuevo Administrador
              </button>
            </div>
            <div onClick={openMatriculAbierta} className="flex flex-[0_1_20rem] min-h-[25vh] rounded-2xl" >
              <button className="w-full bg-blue-400/10 hover:bg-blue-400 flex justify-center items-center gap-2  transition shadow-md rounded-3xl hover:border border-black  ">
                <BiSolidUserAccount className="text-2xl" />
                Nuevo Estudiante
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {newProfesor && <AddNewProfesor close={openModalNewProfesor} newProfesor={newProfesor} />}
        {newCurso && <TemplateModalAnimation className="fixed z-50 flex items-center justify-center backdrop-blur-sm inset-0">
          <FormGestionCursos setUpdate={openModalNewCurso} />
        </TemplateModalAnimation>}
        {
          addAdmins && <TemplateModalAnimation className="fixed flex items-center justify-center inset-0 z-[100] bg-white/40">
            <FormAddGestionAdmins setUpdate={openAddModalAdmins} />
          </TemplateModalAnimation>
        }
        {matriculaAbierta &&
          <TemplateModalAnimation className="fixed flex items-center justify-end backdrop-blur-sm inset-0 z-[100] bg-white/4" >
            <MatriculasAbiertas clicked={openMatriculAbierta} />
          </TemplateModalAnimation>
        }
      </AnimatePresence>
    </div>
  )
}

export default PanelAdmin
