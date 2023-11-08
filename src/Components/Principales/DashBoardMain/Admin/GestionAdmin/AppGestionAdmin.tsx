import PanelPrincipalGestionAdmin from "./PanelPrincipalGestionAdmin"
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import stateGestionAdmins from "./StateGestionAdmins/stateGestionAdmin";
import TemplateModalMessage from "../../../../TemplateModalMessage";
import TemplateModal from "../../../TemplateModal";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { useEffect } from 'react';

const AppGestionAdmin = () => {
  const { setUpdateAdminExisting, adminExisting, succesCreatingAdminUpdate, successCreatingAdmin } = stateGestionAdmins()


  useEffect(() => {
    const timeId = setTimeout(() => {
      if (adminExisting) return setUpdateAdminExisting()
    }, 2500);
    const idTimeTwo = setTimeout(() => {
      if (successCreatingAdmin) return succesCreatingAdminUpdate()
    }, 2500);
    return () => (clearInterval(timeId), clearInterval(idTimeTwo))
  }, [setUpdateAdminExisting, adminExisting, successCreatingAdmin, succesCreatingAdminUpdate]);

  return (
    <div className="flex flex-col w-full" >
      <div className="p-8 text-2xl text-white bg-titleDashboards">
        <p className="flex gap-2 items-center">Gestión Administrador
          <MdOutlineAdminPanelSettings />
        </p>
      </div>
      <div className="p-4 min-h-[90vh]">
        <PanelPrincipalGestionAdmin />
      </div>
      {
        adminExisting &&
        <TemplateModal className="bg-black/10 fixed items-center justify-center inset-0 z-[100]">
          <TemplateModalMessage
            className="text-center animate-fade-down animate-once animate-duration-1000 text-xl text-white"
            text="Administrador existente"
            classNameChildren="p-4 bg-rose-400/80 flex items-center justify-center gap-2"
          >
            <BiSolidMessageRoundedError className="text-3xl " />
          </TemplateModalMessage>
        </TemplateModal>
      }
      {
        successCreatingAdmin &&
        <TemplateModal className="bg-black/10 fixed items-center justify-center inset-0 z-[100]">
          <TemplateModalMessage
            className="text-center animate-fade-down animate-once animate-duration-1000 text-xl text-white"
            text="Administrador creado"
            classNameChildren="p-4 bg-green-500/80 flex items-center justify-center gap-2"
          >
            <BiSolidMessageRoundedError className="text-3xl " />
          </TemplateModalMessage>
        </TemplateModal>
      }
    </div>
  )
}

export default AppGestionAdmin