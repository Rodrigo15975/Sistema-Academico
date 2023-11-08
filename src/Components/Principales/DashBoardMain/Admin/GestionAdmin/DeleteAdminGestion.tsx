import { AiFillDelete } from "react-icons/ai"
import statePanelGestionAdmin from "./StateGestionAdmins/statePanelGestionAdmin"

interface PropsDeleteAdminGestion {
  data: AdminsData
  setUpdate: () => void
}

const DeleteAdminGestion = ({ data, setUpdate }: PropsDeleteAdminGestion) => {
  const { dni, apellidos, nombres, uid } = data
  const { deleteAdminGestion } = statePanelGestionAdmin()

  const sendDeleteAdmin = () => {
    deleteAdminGestion(uid)
  }

  return (
    <div className="border animate-fade-left hover:shadow-2xl transition duration-400 font-titleFontLogin animate-once relative shadow-md flex-[0_1_20rem] flex items-center justify-center rounded-2xl min-h-[15rem] bg-white border-blue-400/50" >
      <button onClick={setUpdate} className="absolute -top-4 -right-4 rounded-md p-4 hover:text-white bg-blue-600/50 hover:bg-blue-600 transition" >Cerrar</button>
      <div className="flex flex-col p-4  items-center justify-center">
        <div className="flex-[0_1_8rem] gap-2 flex flex-col justify-center">
          <p className="text-black/60" > DNI: <span className="text-blue-600" >{dni}</span></p>
          <p className="text-black/60" > Nombre: <span className="text-blue-600" >{nombres}</span> </p>
          <p className="text-black/60" >Apellido: <span className="text-blue-600" >{apellidos}</span> </p>
        </div>
        <div className="flex items-center flex-[0_1_5rem]">
          <button onClick={sendDeleteAdmin} className="w-[15rem] flex items-center justify-center text-white gap-2 rounded-md h-[2.5rem] hover:bg-rose-700 hover:text-white transition bg-rose-500">
            <AiFillDelete />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAdminGestion