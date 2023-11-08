import { BsFillJournalBookmarkFill } from "react-icons/bs";
import ButtonDiv from "../../../ButtonDiv";
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
import FormUpdateCursos from "./FormUpdateCursos";
import TemplateModalAnimation from "../../../../TemplateModalAnimation";
import { AnimatePresence } from "framer-motion";
import AskDeleteCursos from "./AskDeleteCursos";
import TemplateModalAnimationOpacity from "../../../../TemplateModalAnimationOpacity";

interface PropsListCursos {
  cursos: GetReadCursos;
}


const ListCursosGestion = ({ cursos }: PropsListCursos) => {
  const { entorno, horas, fecha, name } = cursos

  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const editForm = () => setOpenEdit(!openEdit)
  const askDelete = () => setOpenDelete(!openDelete)

  return (
    <div className="p-4 flex-[0_1_20rem] font-textFontLogin min-h-[10rem] border relative rounded-3xl hover:bg-blue-500/10 shadow-md border-[#3549ff]/50 hover:shadow transition hover:border-[#3549ff] ">
      <div className="absolute -top-4 bg-blue-400 p-1 text-white rounded-md left-3">
        <BsFillJournalBookmarkFill className="text-xl" />
      </div>
      <div className="absolute bottom-2 right-2 gap-2 flex items-center justify-center">
        <ButtonDiv setUpdate={editForm} className="text-3xl rounded-md p-1 hover:bg-blue-300 transition cursor-pointer shadow-md outline outline-1 bg-blue-300/50 flex items-center justify-center  text-white " >
          <AiOutlineEdit />
        </ButtonDiv>
        <ButtonDiv setUpdate={askDelete} className="text-3xl rounded-md p-1 hover:bg-rose-300 transition cursor-pointer shadow-md outline outline-1 bg-rose-300/50 flex items-center justify-center text-white " >
          <MdAutoDelete />
        </ButtonDiv>
      </div>
      <p className="font-extrabold text-black/50 border-b mb-1 bg-green-300/30 shadow-md rounded-3xl p-1">
        Curso:
        <span className="text-[0.9rem] text-blue-600  " >{name}</span>
      </p>
      <p className="font-extrabold text-black/50 border-b mb-1 p-1">
        Etorno:
        <span className="text-[0.9rem] text-blue-600  " >{entorno}</span>
      </p>
      <p className="font-extrabold text-black/50 border-b mb-1 p-1">
        Horas:
        <span className="text-[0.9rem] text-blue-600  " >{horas}</span>
      </p>
      <p className="p-1 text-black/70" >Asignado: <span>{fecha}</span> </p>

      <AnimatePresence>
        {
          openEdit && (
            <TemplateModalAnimation className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
              <FormUpdateCursos data={cursos} setUpdate={editForm} />
            </TemplateModalAnimation>
          )
        }
      </AnimatePresence>
      <AnimatePresence>
        {
          openDelete && (
            <TemplateModalAnimationOpacity className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
              <AskDeleteCursos data={cursos} setUpdate={askDelete} />
            </TemplateModalAnimationOpacity>
          )
        }
      </AnimatePresence>


    </div>
  )
}

export default ListCursosGestion