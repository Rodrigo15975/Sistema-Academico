import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai"
import ButtonDiv from "../../../../../ButtonDiv"
import ListAsignaciones from "./ListAsignaciones"
import FormUpdateAsignaciones from "./FormUpdateAsignaciones"
import stateEditCard from "./StateEditCard"
import { useEffect } from "react"
import MessagesProfesor from "../../AddNewProfesores/AddAsignacionesProfesores/MessagesProfesor"

type Asignaciones = {
  curso: string,
  dia: string,
  grado: string,
  horario: string,
  seccion: string
}

interface PropsCardEditProfesor {
  setUpdate: () => void
  name: string
  asignaciones: Asignaciones[]
  idDoc: string
}

const CardEditProfesor = ({ setUpdate, name, asignaciones, idDoc }: PropsCardEditProfesor) => {
  const { updateSuccessEdit, successEdit, } = stateEditCard();

  useEffect(() => {
    if (successEdit) {
      const timeSucces = setTimeout(() => updateSuccessEdit(), 1500);
      return () => clearTimeout(timeSucces)
    }
  }, [updateSuccessEdit, successEdit]);

  return (
    <div className="fixed inset-0 bg-white/40 px-8 flex backdrop-blur-sm items-center justify-center animate-fade-left animate-once z-50">
      <div className="flex-[0_1_80rem] min-h-[95vh] bg-white shadow-lg relative rounded-md">
        <ButtonDiv setUpdate={setUpdate} className="absolute border h-[3rem] hover:translate-x-1 transition text-white rounded-md shadow-lg cursor-pointer flex items-center justify-center w-[3rem] -top-2 bg-titleDashboards -right-2">
          <AiOutlineClose className="text-3xl" />
        </ButtonDiv>
        <div className="w-full bg-titleDashboards text-white p-4 rounded-sm shadow-md">
          <p className="text-3xl flex gap-2 items-center">Editando <AiOutlineEdit /> </p>
        </div>
        <div className="text-center py-2 my-3 border-b border-blue-400/50 text-2xl">
          <p className="text-black/60" >Profesor: <span>{name}</span> </p>
        </div>
        <div className="border-b border-blue-400/50 pb-3 my-3 text-center text-2xl text-green-400">
          <p>Información actual</p>
        </div>
        <div className="shadow-md px-5 py-4 flex flex-col">
          <div className="flex justify-center px-2 gap-3 mt-3 flex-wrap">
            {asignaciones.map((data, index) => <ListAsignaciones asignaciones={asignaciones} idDoc={idDoc} data={data} key={index} index={index} />)}
          </div>
        </div>
        <div className="p-4 flex items-center justify-center flex-col">
          <div className="flex justify-center pl-8 w-full ">
            <p className="text-2xl underline underline-offset-2 text-blue-500">Nuevos datos</p>
          </div>
          <FormUpdateAsignaciones />
        </div>
      </div>
      {/* Reutilizando para mostrarle el mensaje de exitoso al actualizar */}
      {successEdit &&
        <MessagesProfesor  className="fixed inset-0 z-[60] flex items-center justify-center">
           <span className="p-4 bg-green-400 rounded-md shadow-lg animate-fade animate-once" >Asignación actualizada</span>
        </MessagesProfesor>
      }
    </div>
  )
}

export default CardEditProfesor
