import InputDni from "../InputAddNewProfesor/InputDni"

const InputDniProfesor = ({ errors, fieldProps, touched }: PropsUserNewProfesor) => {
  return (
    <>
      <InputDni errors={errors} fieldProps={fieldProps} touched={touched} name="dni" textPlaceHolder="DNI" type="text" className="flex-[0_1_20rem]" />
    </>
  )
}

export default InputDniProfesor
