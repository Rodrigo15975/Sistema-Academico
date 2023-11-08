import { AiFillFolderAdd } from "react-icons/ai"
import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"
import { AnimatePresence } from "framer-motion"
import TemplateModalAnimation from "../../../../TemplateModalAnimation"
import FormGestionCursos from "./FormGestionCursos"

const AddNewCursosGestion = () => {
  const { openAddCursos, setOpenAddCursos } = stateGestionCursos()

  const openForm = () => {
    setOpenAddCursos()
  }

  return (
    <>
      <button onClick={openForm} className="p-4 outline-1 flex items-center justify-center w-[20rem] hover:outline outline gap-3 transition rounded-2xl bg-[#3549ff] text-white hover:bg-green-300/50">
        <AiFillFolderAdd className="text-2xl" />
        Agregar Nuevo Curso
      </button>
      <AnimatePresence>
        {openAddCursos && <TemplateModalAnimation className="fixed z-50 flex items-center justify-center backdrop-blur-sm inset-0">
          <FormGestionCursos setUpdate={openForm} />
        </TemplateModalAnimation>}
      </AnimatePresence>
    </>
  )
}

export default AddNewCursosGestion