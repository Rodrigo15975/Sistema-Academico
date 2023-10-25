import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import ModalAsk from "./ModalAsk";
import { useState } from "react";
import CardEditProfesor from "./EditCard/CardEditProfesor";
import DataCompleteProfesor from "./DataCompleteProfesor/DataCompleteProfesor";
import TemplateModal from "../../../../TemplateModal";
import stateEditCard from "./EditCard/StateEditCard";
const CardProfesores = ({ data }: PropsCardGetDataListaProfesores) => {
  const { asignaciones, name, uid, idDoc, } = data
  const { clearDataFormOpen, clearDataForUpdateAsignaciones,stateOriginBtnDisableFormEdit } = stateEditCard()
  const [ask, setAsk] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [dataComplete, setDataComplete] = useState(false);

  // preguntar y eliminar
  const askDelete = () => setAsk(!ask)

  //Editar informacion
  const updateEdit = () => {
    setEditCard(!editCard)
    //CUANDO CIERRA EL MODAL DE EDITAR, EL BUTTON RE REGISTRAR INFORMACION SE BLOQUERA AL ESTADO NORMAL
    stateOriginBtnDisableFormEdit()
    //Limpiar los datos que obtediste al dar editar
    clearDataFormOpen();
    clearDataForUpdateAsignaciones()
  };
  //Informacion general
  const closeDataComplete = () => setDataComplete(!dataComplete)
  return (
    <>
      <div className="flex flex-col rounded-2xl shadow-lg flex-[0_1_21rem] min-h-[12.3125rem] outline-1 outline outline-blue-300/30  transition hover:-translate-y-unit-3 hover:shadow-none">
        <div className={`flex-[0_1_8.5rem] rounded-tr-2xl rounded-tl-2xl px-4 py-4 flex gap-2 flex-col relative z-0 bg-titleDashboards`}>
          <div className="absolute w-[5rem] flex items-center justify-center gap-2 shadow-md h-[2.5rem] -top-2 outline-1 outline outline-black/20 right-2 rounded-lg bg-white">
            <div className="cursor-pointer hover:bg-black/50 rounded-md" onClick={askDelete} >
              <RiDeleteBin6Line className="text-[1.7rem] rounded text-white bg-rose-500/80" />
            </div>
            <div className="cursor-pointer" onClick={updateEdit}>
              <RiEdit2Line className="text-[1.7rem] rounded text-white bg-green-500/60" />
            </div>
          </div>
          <div className="text-white">
            <p className="underline underline-offset-2">Profesor:</p>
            <p>{name}</p>
          </div>
          <div>
            <p className="text-white underline underline-offset-2">Curso:</p>
            {asignaciones.slice(0, 1).map((data, index) => <span className="text-white" key={`cursos-${index}`} >{data.curso}</span>)}
          </div>
        </div>
        <div className="flex-[0_1_8.5rem] relative px-4 py-4">
          <div className="absolute bottom-3 right-3 text-3xl">
            <div onClick={closeDataComplete} className="h-[2rem] z w-[3rem] flex items-center bg-white border rounded-lg text-black shadow-lg text-4xl cursor-pointer justify-center" >
              <FcFolder />
            </div>
          </div>
          <div>
            <p className="flex gap-2 items-center text-gray-500">Identificador: <span>{uid.slice(0, 8)}</span></p>
          </div>
        </div>
      </div>
      {/* FALTA EDITAR  */}
      {ask && <ModalAsk name={name} idDoc={idDoc} setUpdate={askDelete} />}
      {editCard && <CardEditProfesor setUpdate={updateEdit} name={name} idDoc={idDoc} asignaciones={asignaciones} />}
      {dataComplete &&
        <TemplateModal
          className="fixed inset-0 bg-white/30 py8 px-6 overflow-y-scroll backdrop-blur-sm z-50 flex items-center justify-center animate-fade-left animate-once" >
          <DataCompleteProfesor setUpdate={closeDataComplete} data={data} />
        </TemplateModal>}
    </>
  )
}

export default CardProfesores
