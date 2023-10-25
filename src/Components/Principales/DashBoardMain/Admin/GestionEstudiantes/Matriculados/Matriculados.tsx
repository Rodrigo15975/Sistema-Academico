import HeaderGestioneEstudiantes from "../HeaderGestioneEstudiantes"
import {GoChecklist  } from "react-icons/go";

const Matriculados = ({ clicked }: PropBtnClose  ) => {
  return (
    <div className="flex flex-col bg-white min-h-screen flex-[0_1_60rem] shadow-xl ">
        <HeaderGestioneEstudiantes cliCked={clicked} icon={<GoChecklist/>} title="Estudiantes Matriculados"  />
    </div>
  )
}

export default Matriculados