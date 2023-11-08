import { BiExit } from "react-icons/bi"
import ButtonDiv from "../../../ButtonDiv"
import { Field, FieldArray, Form, Formik, FormikHelpers } from "formik"
import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"
import { initialValueCursos, validationSchemaGestionCursos } from "./InitialValueValidationGestionCursos"
import { useEffect } from 'react';
import { AiOutlineFileAdd } from "react-icons/ai"
import { RiDeleteBin2Line } from "react-icons/ri"
import { BsCardChecklist } from "react-icons/bs"
// import { useState } from 'react';

interface PropsFormGestionCursos {
  setUpdate: () => void
}
const FormGestionCursos = ({ setUpdate }: PropsFormGestionCursos) => {
  const { onSubmitDataCursos, updateDate } = stateGestionCursos()
  // const [db, setDb] = useState<GetReadCursos[]>([]);

  const sendOnSubmit = (data: InitialCursosData, helper: FormikHelpers<InitialCursosData>) => {
    const { resetForm } = helper
    onSubmitDataCursos(data, resetForm)
  }

  useEffect(() => {
    updateDate();
  }, [updateDate]);

  return (
    <article className="flex flex-col  justify-between p-4 gap-2 flex-[0_1_40rem] shadow-blue-500/20 rounded-2xl min-h-[80vh] relative bg-white border shadow-xl">
      <div className="text-2xl border-b text-blue-600 font-titleFontLogin border-blue-600/50 pb-2">
        <p>Añadiendo nuevo Curso</p>
      </div>
      <ButtonDiv setUpdate={setUpdate} className="bg-black/80 text-white rounded-3xl p-3 hover:rounded transition-all hover:bg-blue-400 -right-3 -top-3 absolute" >
        <BiExit className="text-4xl" />
      </ButtonDiv>
      <Formik
        onSubmit={sendOnSubmit}
        initialValues={initialValueCursos}
        validationSchema={validationSchemaGestionCursos}
      >
        {({ values }) => (
          <Form className="flex border flex-col px-4 py-2 rounded-2xl border-blue-500/50 min-h-[43rem] items-start justify-between ">
            <FieldArray name="nuevosCursos">
              {({ push, remove }) => (
                <div className="flex flex-col w-full">
                  {
                    values.nuevosCursos.map((_, index) =>
                      <div key={index} className="flex justify-between items-center border-b shadow-md shadow-blue-400/40 p-1 rounded-md w-full">
                        <div className="flex gap-4 p-2 font-titleFontLogin w-full " >
                          <Field
                            name={`nuevosCursos.${index}.name`}
                            className={`outline-none rounded-md border-green-400/50 border focus:border-green-400 transition text-blue-500/80 p-2`}
                            placeholder="Nombre del curso"
                          />
                          <Field as="select" name={`nuevosCursos.${index}.entorno`} className="border border-green-300/50 p-2 rounded-md text-blue-500/80"  >
                            <option value="">Seleccione Entorno</option>
                            <option value="PRESENCIAL">Presencial</option>
                            {/* <option value="VIRTUAL">Virtual</option> */}
                          </Field>
                          <Field as="select" name={`nuevosCursos.${index}.horas`} className="border border-green-300/50 p-2 rounded-md text-blue-500/80"  >
                            <option value="">Horas</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </Field>
                        </div>
                        <div className=" bg-rose-500/50 hover:bg-rose-600 transition  rounded-md border p-1 text-white">
                          <div className=" text-3xl  cursor-pointer" onClick={() => remove(index)} >
                            <RiDeleteBin2Line />
                          </div>
                        </div>
                      </div>
                    )
                  }
                  <div className="flex justify-end items-center mt-4" >
                    <button type="button" onClick={() => push({ entorno: "", name: "", horas: "" })} className="p-4 flex items-end rounded-xl hover:bg-green-200/10 border hover:text-black transition-all justify-center gap-3 text-white bg-[#3549ff]">
                      <AiOutlineFileAdd className="text-3xl" />
                      Agregar mas cursos</button>
                  </div>
                </div>
              )}
            </FieldArray>
            <div className="mt-5 flex w-full justify-end">
              <button type="submit" className="p-4 w-[15rem] justify-center border border-black/50 shadow-lg flex items-center  hover:text-black bg-green-400/10 hover:bg-green-400/80 transition  justifiy-center gap-2 rounded-lg" >
                <BsCardChecklist className="text-xl" />
                Registrar curso</button>
            </div>
          </Form>
        )}
      </Formik>
    </article >
  )
}
export default FormGestionCursos
