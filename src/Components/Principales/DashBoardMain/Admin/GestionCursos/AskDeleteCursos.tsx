import { FiDelete } from "react-icons/fi"
import ButtonDiv from "../../../ButtonDiv"
import { BiMessageAltEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"

interface AskDeleteCursosProps {
  setUpdate: () => void
  data: GetReadCursos
}



const AskDeleteCursos = ({ data, setUpdate }: AskDeleteCursosProps) => {
  const { entorno, horas, idDoc, name } = data
  const { deleteDocumentCursos } = stateGestionCursos()
  const deleteTrue = () => {
    deleteDocumentCursos(idDoc)
  }
  return (
    <div className="flex-col gap-4 shadow-xl shadow-blue-400/40 rounded-2xl hover:shadow transition duration-250 border-blue-400/50 flex items-center p-4 justify-center flex-[0_1_35rem] min-h-[40vh] bg-white border relative" >
      <ButtonDiv setUpdate={setUpdate} className="cursor-pointer hover:bg-blue-400 transition shadow-lg absolute border bg-blue-400/50 text-white p-2 rounded-md -top-4 -right-4 text-3xl">
        <FiDelete />
      </ButtonDiv>
      <div className="flex flex-col p-1 flex-[0_1_6rem]  w-full">
        <p className="text-2xl text-black/50 text-center flex items-center justify-center gap-2 border-b pb-2"> <BiMessageAltEdit />
          Información a Eliminar</p>
        <div className="flex justify-center mt-4 items-center gap-4 ">
          <p className="text-black/50" >Curso:  <span className="text-green-500" >{name}</span> </p>
          <p className="text-black/50" >Etorno: <span className="text-green-500" >{entorno}</span> </p>
          <p className="text-black/50" >Horas:  <span className="text-green-500" >{horas}</span> </p>
        </div>
      </div>
      <div className="flex-[0_1_10rem] border border-black/50 shadow-md  rounded  w-full">
        <div className="flex justify-center items-center h-full">
          <button onClick={deleteTrue} type="button" className="flex items-center border hover:bg-white  justify-center p-4 w-[15rem] hover:text-black transition shadow-md bg-rose-500 text-white  rounded-xl gap-1" >Eliminar
            <MdDelete className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AskDeleteCursos