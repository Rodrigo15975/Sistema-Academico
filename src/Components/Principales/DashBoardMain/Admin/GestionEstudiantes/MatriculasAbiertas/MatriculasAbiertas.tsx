import HeaderGestioneEstudiantes from "../HeaderGestioneEstudiantes"
import { PiUsersThreeThin } from "react-icons/pi";
const MatriculasAbiertas = ({ clicked }: PropBtnClose) => {
  return (
    <div className="flex flex-col bg-white min-h-screen flex-[0_1_60rem]">
      <HeaderGestioneEstudiantes cliCked={clicked}  icon={<PiUsersThreeThin className="text-4xl" />} title="Matricula Abierta" />
      <div>

      </div>
    </div>
  )
}

export default MatriculasAbiertas