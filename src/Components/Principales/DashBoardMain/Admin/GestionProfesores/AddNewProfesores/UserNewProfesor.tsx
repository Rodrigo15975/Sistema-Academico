import InputsAddNewProfesor from "../InputAddNewProfesor/InputsAddNewProfesor"
const UserNewProfesor = ({ errors, fieldProps, touched }: PropsUserNewProfesor) => {
  return (
    <div className="flex justify-start gap-4 border-b border-[#005DD6]/30 shadow-sm py-1">
      <div className="flex font-titleFontLogin rounded-br-[3rem] bg-[#005DD6]/5 flex-[0_1_17.9375rem] justify-center items-center text-[#005DD6] text-[1.1rem]">
        <p>Usuario del Profesor</p>
      </div>
      <div className="flex flex-[0_1_32.916875rem] my-3 pb-2 justify-between gap-2">
        <div className="flex w-full justify-between gap-2 relative">
          <InputsAddNewProfesor errors={errors}
            fieldProps={fieldProps}
            className="text-sm flex flex-[0_1_15rem]"
            name="email" textPlaceHolder="Correo@hotmail.com"
            touched={touched} type="text"
            label="Correo electrónico"
            disabled={true}
          />
          <InputsAddNewProfesor errors={errors}
            fieldProps={fieldProps}
            className="text-sm flex flex-[0_1_15rem]"
            name="password" textPlaceHolder="*****"
            touched={touched} type="text"
            label="Contraseña"
            disabled={true}
          />
        </div>
      </div>

    </div>
  )
}

export default UserNewProfesor