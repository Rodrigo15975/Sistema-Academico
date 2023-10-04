import { useEffect } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
import stateRegisterNewProfesor from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";
import InputsAddNewProfesor from "../InputAddNewProfesor/InputsAddNewProfesor"
//Tiene 4 Props, ya que actualizará, el getValuesFields, propiedad que necesitara, para actualizar los inputs,del nuevo profesor
const InformationGeneral = ({ errors, fieldProps, touched, setFields }: PropsSetNewProfesor) => {

  const { getValuesFields } = stateRegisterNewProfesor()

  useEffect(() => {
    getValuesFields(setFields);
  }, [setFields, getValuesFields]);

  return (
    <div className="border-[#005DD6]/30 shadow-sm border-b flex items-center justify-start gap-4 py-1">
      <div className="flex font-titleFontLogin rounded-tr-[3rem] h-full bg-[#005DD6]/5 flex-[0_1_17.9375rem] justify-center items-center text-[#005DD6] text-[1.1rem]">
        <p>Información General</p>
      </div>
      <div className="flex flex-[0_1_32.916875rem] my-2 pb-2">
        <div className="flex w-full justify-center items-center">
          <InputsAddNewProfesor errors={errors} fieldProps={fieldProps}
            className="flex justify-start text-sm w-full"
            name="name"
            textPlaceHolder="Javier Luis"
            touched={touched}
            type="text"
            label="Nombre"
            disabled={true}
          />
          <InputsAddNewProfesor errors={errors} fieldProps={fieldProps}
            className="flex justify-end text-sm w-full"
            name="apellidos"
            textPlaceHolder="Quispe Rojas"
            touched={touched}
            type="text"
            label="Apellido"
            disabled={true}
          />
        </div>
      </div>
    </div>
  )
}

export default InformationGeneral