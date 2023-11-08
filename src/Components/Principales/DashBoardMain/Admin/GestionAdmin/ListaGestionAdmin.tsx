import { useState } from "react"
// import { FiEdit } from "react-icons/fi"
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import TemplateModal from "../../../TemplateModal"
// import UpdateAdminGestion from "./UpdateAdminGestion"
import DeleteAdminGestion from "./DeleteAdminGestion"

interface PropsListaGestionAdmin {
  data: AdminsData
}

const ListaGestionAdmin = ({ data }: PropsListaGestionAdmin) => {
  const { apellidos, correo, dni, nombres } = data
  // const [updateAdmin, setUpdateAdmin] = useState(false);
  const [deleteAdmin, setDeleteAdmin] = useState(false);

  // const openUpdate = () => {
  //   setUpdateAdmin(!updateAdmin)
  // }
  const openDelete = () => {
    setDeleteAdmin(!deleteAdmin)
  }

  return (
    <>
      <div className="flex flex-[0_1_20rem] h-[15rem] relative">
        <div onClick={openDelete} className="top-0 absolute right-0 z-50 cursor-pointer p-2  ">
          <RiDeleteBin6Line className="text-4xl bg-rose-500/50 hover:bg-rose-500 transition text-white rounded-md" />
        </div>
        <div className="absolute bg-titleDashboards -top-0 w-full shadow-lg flex justify-center border-b py-3 rounded-tr-2xl rounded-tl-2xl">
          <div className=" flex items-center gap-2 text-xl ">
            <MdOutlineAdminPanelSettings className="text-4xl bg-green-300 text-black rounded-full" />
          </div>
        </div>
        <div className="flex rounded-xl gap-5 font-titleFontLogin  border-green-500/30 bg-white hover:bg-green-300/10 shadow-lg hover:shadow transition flex-col p-4 w-full h-full justify-center items-start  border" >
          <div className="flex flex-col mt-[4rem] ">
            <div className="flex  text-black/50 items-start border-b pb-2">
              <p className="flex gap-2"  >
                DNI:
                <span className="text-[1rem] text-blue-400">{dni}</span>
              </p>
            </div>
            <div className="flex  text-black/50 items-start border-b pb-2">
              <p className="flex gap-2" >
                Nombre:
                <span className="text-[0.9rem] text-blue-400">{nombres}</span>
              </p>
            </div>
            <div className="flex text-black/50  items-start border-b pb-2">
              <p className="flex gap-2" >
                Apellidos:
                <span className="text-[0.9rem] text-blue-400">{apellidos}</span>
              </p>
            </div>
            <div className="flex  text-black/50 items-start border-b pb-2">
              <p className="flex gap-2 items-center" >Correo:
                <span className="text-[0.9rem] text-blue-400 ">{correo}</span>
              </p>
            </div>
          </div>
          {/* <div className="w-full flex-[0_1_3rem] flex justify-center">
            <div onClick={openUpdate} className="text-3xl border flex items-center justify-center p-2 cursor-pointer bg-blue-600/50 hover:bg-blue-600 transition text-white rounded-lg shadow-lg ">
              <FiEdit />
            </div>
          </div> */}
        </div>
      </div>

      {/* {updateAdmin && <TemplateModal className="fixed inset-0 z-[100] bg-white/50 flex items-center justify-center" >
        <UpdateAdminGestion data={data} />
      </TemplateModal>
      } */}
      {deleteAdmin && <TemplateModal className="fixed inset-0 z-[100] bg-white/20 flex items-center justify-center"  >
        <DeleteAdminGestion setUpdate={openDelete}  data={data} />
      </TemplateModal>
      }
    </>
  )
}

export default ListaGestionAdmin