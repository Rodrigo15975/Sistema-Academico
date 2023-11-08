import HeaderGestioneEstudiantes from "../HeaderGestioneEstudiantes"
import { GoChecklist } from "react-icons/go";
import PanelStudenMatriculados from "./PanelStudenMatriculados";

const Matriculados = ({ clicked }: PropBtnClose) => {
  //Mostrar la lista de los matriculados
  return (
    <div className="flex flex-col rounded-xl bg-white min-h-[90vh] flex-[0_1_95rem] shadow-2xl ">
      <HeaderGestioneEstudiantes cliCked={clicked} icon={<GoChecklist />} title="Estudiantes Matriculados" />
      <div className="min-h-[80vh] flex justify-center
       items-center
       rounded-xl w-full p-4"
      >
        <PanelStudenMatriculados />
      </div>
    </div>
  )
}

export default Matriculados