import { useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { BsPersonAdd } from "react-icons/bs";
import Button from '../../../Button';
import AddNewProfesor from './AddNewProfesores/AddNewProfesor';
const BusquedaDeProfesores = () => {
  const [newProfesor, setNewProfesor] = useState<boolean>(false);
  const openModalNewProfesor = () => {
    setNewProfesor(!newProfesor)
    const d = document
    const body = d.querySelector("body")
    if (body)  body.style.overflow = "hidden";    
  };
  return (
    <>
      <div className="flex-[0_1_20rem] relative min-h-[2.5rem]" >
        <input type="text" placeholder="Busqueda" className="absolute focus:shadow-xl focus:scale-105 transition p-2 focus:bg-blue-100 pl-[2rem] w-full border border-black/50 rounded-3xl outline-none" />
        <FcSearch className="absolute right-4 top-3" />
      </div>
      <div className="flex flex-[0_1_15rem] items-center justify-center">
        <Button clicked={openModalNewProfesor} styleClass="bg-[#FFD645] rounded-lg w-full hover:bg-white hover:outline-double h-full flex items-center justify-center gap-3 transition duration-200" >
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
