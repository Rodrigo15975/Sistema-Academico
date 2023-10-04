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

{/* <div className="flex-[0_1_5rem] flex border-b border-black/10 gap-4" >
          <div className="flex-[0_1_20rem] flex justify-center items-center text-[#00537C] text-xl">
            <p>Información general</p>
          </div>
          <div className="flex-[0_1_30rem] flex gap-5">
            <Formik initialValues={initialValuesNewProfesor} validationSchema={validationNewProfesor} onSubmit={(values) => console.log(values)
            } >
              {({ errors, touched, getFieldProps }) => (
                <Form>
                  <InputsAddNewProfesor errors={errors} touched={touched} fieldProps={getFieldProps} name="nombre" textPlaceHolder="Nombre" type="text" />
                  <button type="submit" >Enviar</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex-[0_1_5rem] flex border-b border-black/10 gap-4" >
          <div className="flex-[0_1_20rem] flex justify-center items-center text-[#00537C] text-xl">
            <p>Usuario del Profesor</p>
          </div>
          <div className="flex-[0_1_30rem] flex gap-5">

          </div>
        </div> */}