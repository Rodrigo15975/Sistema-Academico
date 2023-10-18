import { AiFillDelete } from "react-icons/ai"
import stateListaPanelProfesores from "../../../../../StatesGlobals/StateListaPanelProfesores/StateListaPanelProfesores"
import { BsArrowLeftCircle } from "react-icons/bs"

type PropsModalAsk = {
  name: string
  idDoc: string
  setUpdate: () => void
}

const ModalAsk = ({ name, idDoc, setUpdate  }: PropsModalAsk) => {
  const { deleteListProfesor } = stateListaPanelProfesores()
  const deleteProfesor = async () => {
    await deleteListProfesor(idDoc)
    setUpdate()
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center font-titleFontLogin z-50 bg-black/10">
      <div className="flex-[0_1_20rem] relative py-4 border border-blue-400/50 animate-fade-up animate-once animate-duration-500 animate-ease-linear animate-fill-forwards min-h-[7rem] gap-4 bg-white flex flex-col items-center justify-center rounded-lg">
        <div className="flex flex-col w-full text-center border-b border-blue-400/50">
          <p className="flex gap-2 items-center text-xl justify-center text-blue-400 mb-1">
            Profesor:
            <span className="text-[1rem] text-black/60" >
              {name}
            </span> </p>
        </div>
        <div className="flex">
          <button onClick={deleteProfesor} type="button" className="flex items-center justify-center gap-2 bg-rose-500/80 hover:bg-rose-600 transition p-2 text-white rounded-md "> <AiFillDelete /> Eliminar</button>
        </div>
        <div className="absolute text-white text-2xl -right-4 cursor-pointer hover:scale-105 bg-blue-400 transition -top-4 flex items-center justify-center gap-2 p-4 rounded-md"
          onClick={setUpdate}>
          <BsArrowLeftCircle />
        </div>
      </div>
    </div>
  )
}

export default ModalAsk
