
import { CiEdit } from "react-icons/ci";
import stateEditCard from "./StateEditCard";

type PropsAsignacionesUpdate = {
  data: AsignacionesProfesor
  index: number,
  idDoc: string,
  asignaciones: AsignacionesProfesor[]
}

const ListAsignaciones = ({ data, idDoc, index, asignaciones }: PropsAsignacionesUpdate) => {
  const { setFormOpen, getForUpdate,updateBtnDisableFormEdit } = stateEditCard()
  const { curso, dia, grado, horario, seccion } = data
  const sendRequestForm = () => {
    //Informacion que mandare para actualizar los datos
    getForUpdate({ asignaciones, idDoc, index })
    setFormOpen(data)    
    updateBtnDisableFormEdit()
  }

  return (
    <>
      <div className="relative hover:shadow-none transition duration-300 hover:-translate-y-1 shadow-md outline outline-1 outline-blue-400/30 rounded-md p-4">
        <p className="text-blue-700/70 mt-1" >Curso: <span className="text-gray-800/70">{curso}</span></p>
        <p className="text-blue-700/70 mt-1" >Grado: <span className="text-gray-800/70">{grado}</span></p>
        <p className="text-blue-700/70 mt-1" >Sección: <span className="text-gray-800/70">{seccion}</span></p>
        <p className="text-blue-700/70 mt-1" >Día: <span className="text-gray-800/70">{dia}</span></p>
        <p className="text-blue-700/70 mt-1" >Horario: <span className="text-gray-800/70"> {horario}</span> </p>
        <div onClick={sendRequestForm} className=" cursor-pointer absolute hover:bg-blue-500 transition text-white -top-2 bg-green-400 text-3xl rounded-md -right-1">
          <CiEdit />
        </div>
      </div>
    </>
  )
}

export default ListAsignaciones
