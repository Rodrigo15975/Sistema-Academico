import { AiOutlineClose } from "react-icons/ai"
import ButtonDiv from "../../../../../ButtonDiv"
import { BiBookReader } from "react-icons/bi"
import ListCompleteData from "./ListCompleteData"

interface PropsDataComplete {
  setUpdate: () => void
  data: GetDataListaProfesores
}
const DataCompleteProfesor = ({ data, setUpdate }: PropsDataComplete) => {
  const { apellidos, asignaciones, dni, emailNewProfesor, name, uid, } = data
  return (
    <div className="flex-[0_1_80rem] rounded-xl relative min-h-[80vh] outline outline-black/10 outline-1 shadow-lg bg-white ">
      <div className="absolute -right-4 -top-4 bg-green-400 text-white p-2 rounded-md shadow-lg shadow-blue-500 hover:shadow-none transition duration-150 cursor-pointer">
        <ButtonDiv setUpdate={setUpdate} className="text-3xl">
          <AiOutlineClose />
        </ButtonDiv>
      </div>
      <div className="bg-titleDashboards p-4 text-white text-2xl rounded-tr-md rounded-tl-md">
        <p className="flex items-center justify-center gap-2">Información General
          <BiBookReader className="text-3xl" />
        </p>
      </div>
      <div className="px-4 py-6">
        <div className="text-2xl pb-1 border-blue-400/50 border-b">
          <p className="text-blue-500">Profesor: <span className="text-black/70">{name}</span></p>
        </div>
        <div className="mt-4">
          <div className="border p-4 border-blue-400/50 shadow-lg rounded-lg min-h-[10rem]">
            <table className="w-full text-center">
              <thead className="">
                <tr className="bg-titleDashboards shadow-sm text-white">
                  <th className="">Nombre</th>
                  <th className="">Apellidos</th>
                  <th className="">DNI</th>
                  <th className="">Email</th>
                  <th className="">Identificador</th>
                </tr>
              </thead>
              <tbody className="border-b border-green-500/30" >
                <tr>
                  <td className="py-2 text-black/70">{name}</td>
                  <td className="py-2 text-black/70">{apellidos}</td>
                  <td className="py-2 text-black/70">{dni}</td>
                  <td className="py-2 text-black/70">{emailNewProfesor}</td>
                  <td className="py-2 text-black/70">{uid.slice(0, 8)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 text-2xl pb-1 border-blue-400/50 border-b">
          <p className="text-blue-500">Asignaciones:</p>
        </div>
        <div className="flex gap-4 justify-center">
          {asignaciones.map((value, index) =>
            <ListCompleteData key={`information-general-${index}`} data={value} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DataCompleteProfesor
