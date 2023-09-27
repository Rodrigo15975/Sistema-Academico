import { FcSearch } from "react-icons/fc";
// import InputsAddNewProfesor from "./InputAddNewProfesor/InputsAddNewProfesor";
// import { Formik, Form } from "formik";
// import { initialValuesNewProfesor, validationNewProfesor } from "./InputAddNewProfesor/InitialValuesNewProfesor";
const PanelAddNewProfesor = () => {
  return (
    <>
      <div className="w-full min-h-[9vh] flex flex-col">
        <div className="flex-[0_1_6rem] border-b border-black/10 flex items-center justify-center gap-3" >
          <input type="text" placeholder="DNI" className="pl-4 border-2 outline-none border-black/70  flex-[0_1_18.5em] h-[2.5625rem] rounded-lg" />
          <button className="bg-[#121111] h-[2.5625rem] w-[4.875rem] flex items-center justify-center text-3xl rounded-lg"><FcSearch /></button>
        </div>       
      </div>
      <div className="w-full min-h-[82vh]">
        
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