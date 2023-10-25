import { useEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { BsPersonAdd } from "react-icons/bs";
import Button from '../../../Button';
import AddNewProfesor from './AddNewProfesores/AddNewProfesor';
import stateRegisterNewProfesor from '../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor';
import stateListaPanelProfesores from '../../../../StatesGlobals/StateListaPanelProfesores/StateListaPanelProfesores';
const BusquedaDeProfesores = () => {
  const { updateBtnExitNeWProfesor } = stateRegisterNewProfesor()
  const { changeValueSearch } = stateListaPanelProfesores()
  const [newProfesor, setNewProfesor] = useState<boolean>(false);
  const d = document
  const htmlBody = d.querySelector("body")
  const openModalNewProfesor = () => {
    setNewProfesor(!newProfesor)
    if (htmlBody) return htmlBody.style.overflow = "hidden";
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    changeValueSearch(value)
  }

  useEffect(() => {
    if (!newProfesor) if (htmlBody) htmlBody.style.overflow = "auto";
    updateBtnExitNeWProfesor()
  }, [newProfesor, htmlBody, updateBtnExitNeWProfesor]);

  return (
    <>
      <div className="flex-[0_1_20rem] relative min-h-[2.5rem]" >
        <input onChange={onChangeInput} type="text" placeholder="Busqueda" className="absolute focus:shadow-xl focus:scale-105 transition p-2 focus:bg-blue-100 pl-[2rem] w-full border border-black/50 rounded-3xl outline-none" />
        <FcSearch className="absolute right-4 top-3" />
      </div>
      <div className="flex flex-[0_1_15rem] items-center justify-center">
        <Button clicked={openModalNewProfesor} styleClass="bg-[#3549ff] text-white rounded-lg w-full hover:scale-105 h-full flex items-center justify-center gap-3 transition duration-200" >
          <BsPersonAdd className="text-3xl" />
          Nuevo Profesor
        </Button>
      </div>
      {newProfesor &&
        <AddNewProfesor close={openModalNewProfesor} newProfesor={newProfesor} />
      }
    </>
  )
}

export default BusquedaDeProfesores
