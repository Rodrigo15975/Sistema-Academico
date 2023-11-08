import Button from "../../../Button"
import { RiAdminLine } from "react-icons/ri"
import stateGestionAdmins from "./StateGestionAdmins/stateGestionAdmin"
import TemplateModal from "../../../TemplateModal"
import FormAddGestionAdmins from "./FormAddGestionAdmins/FormAddGestionAdmins"


const AddBtnGestionAdmint = () => {
  const { setAddAdmins, addAdmins } = stateGestionAdmins()

  const openAddModal = () => setAddAdmins()


  return (
    <div className="flex-[0_1_15rem] h-[2.7rem]">
      <Button clicked={openAddModal} styleClass="w-full flex shadow-md items-center justify-center gap-2 h-full border bg-[#3549ff] text-white rounded-md hover:bg-[#ff693a]/50 transition">
        Nuevo Admin
        <RiAdminLine className="text-2xl text-white" />
      </Button>
      {
        addAdmins && <TemplateModal className="animate-fade-down animate-once animate-duration-1000 fixed flex items-center justify-center inset-0 z-[100] bg-black/10">
          <FormAddGestionAdmins setUpdate={openAddModal} />
        </TemplateModal>
      }
    </div>
  )
}

export default AddBtnGestionAdmint
