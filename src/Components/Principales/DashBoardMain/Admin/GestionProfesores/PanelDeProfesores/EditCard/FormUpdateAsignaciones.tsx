
import FormEdit from "./FormEdit/FormEdit"
import stateEditCard from "./StateEditCard"

const FormUpdateAsignaciones = () => {
  const { getDataList } = stateEditCard()
  const { curso, dia, grado, horario, seccion } = getDataList
  return (
    <div className="w-full flex gap-2 justify-center rounded-md min-h-[25rem] shadow-md p-2 mt-2">
      <div className="border p-3 flex-[0_1_20rem] flex flex-col gap-3 rounded-md border-blue-500/20">
        <p className="text-xl text-white bg-blue-500/50 p-1 rounded-sm" >Asignaciones</p>
        <p className="text-blue-500/80 shadow-sm hover:bg-blue-500/10 transition rounded-md ">Curso: <span className="text-black/50" >{curso}</span></p>
        <p className="text-blue-500/80 shadow-sm hover:bg-blue-500/10 transition rounded-md ">Grado: <span className="text-black/50" >{grado}</span> </p>
        <p className="text-blue-500/80 shadow-sm hover:bg-blue-500/10 transition rounded-md ">Día: <span className="text-black/50" >{dia}</span> </p>
        <p className="text-blue-500/80 shadow-sm hover:bg-blue-500/10 transition rounded-md ">Horario: <span className="text-black/50" >{horario}</span> </p>
        <p className="text-blue-500/80 shadow-sm hover:bg-blue-500/10 transition rounded-md ">Sección: <span className="text-black/50" >{seccion}</span> </p>
      </div>
      <div className=" w-[70%] flex items-center justify-center">
        <div className="flex-[0_1_53rem] min-h-[24rem] border" >
          <FormEdit/>
        </div>
      </div>
    </div>
  )
}

export default FormUpdateAsignaciones