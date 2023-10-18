import FormAddNewProfesores from "./FormAddNewProfesores";
import InputDniNewProfesor from "./InputDniNewProfesor";

const PanelAddNewProfesor = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex-[0_1_3rem] py-2 border-b border-[#005DD6]/30 shadow-sm flex items-center justify-center gap-3" >
          <InputDniNewProfesor />
        </div>
      </div>
      <div className="w-full flex items-center">
        <FormAddNewProfesores />
      </div>
    </>
  )
}

export default PanelAddNewProfesor
