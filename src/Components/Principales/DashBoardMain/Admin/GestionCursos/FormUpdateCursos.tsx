import { FiDelete } from "react-icons/fi"
import ButtonDiv from "../../../ButtonDiv"
import { BiMessageAltEdit } from "react-icons/bi"
import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"
import { Field, Form, Formik } from "formik"
import { MdUpdate } from "react-icons/md"
import { initialValueCursosUpdate, validationSchemaGestionCursosUpdate } from "./InitialValueValidationGestionCursos"

interface FormUpdateCursosProps {
  setUpdate: () => void
  data: GetReadCursos
}

const FormUpdateCursos = ({ data, setUpdate }: FormUpdateCursosProps) => {
  const { updateDocumentCursos } = stateGestionCursos()
  const { entorno, horas, idDoc, name } = data


  const sendNewCursos = (data: InitialNewCursos) => {
    const { name } = data
    const dataMayuscula = {
      ...data,
      name: name.toUpperCase()
    }
    updateDocumentCursos(dataMayuscula, idDoc)
    setUpdate()
  }

  return (
    <div className="flex-col gap-4 shadow-xl shadow-blue-400/40 rounded-2xl hover:shadow transition duration-250 border-blue-400/50 flex items-center p-4 justify-center flex-[0_1_40rem] min-h-[60vh] bg-white border relative" >
      <ButtonDiv setUpdate={setUpdate} className="cursor-pointer hover:bg-blue-400 transition shadow-lg absolute border bg-blue-400/50 text-white p-2 rounded-md -top-4 -right-4 text-3xl">
        <FiDelete />
      </ButtonDiv>
      <div className="flex flex-col p-1 flex-[0_1_6rem]  w-full">
        <p className="text-2xl text-black/50 text-center flex items-center justify-center gap-2 border-b pb-2"> <BiMessageAltEdit />
          Información a Actualizar</p>
        <div className="flex justify-center mt-4 items-center gap-4 ">
          <p className="text-black/50" >Curso:  <span className="text-green-500" >{name}</span> </p>
          <p className="text-black/50" >Etorno: <span className="text-green-500" >{entorno}</span> </p>
          <p className="text-black/50" >Horas:  <span className="text-green-500" >{horas}</span> </p>
        </div>
      </div>
      <div className="flex-[0_1_24rem] border border-blue-400/40 rounded-lg shadow-md  w-full">
        <Formik
          onSubmit={sendNewCursos}
          initialValues={initialValueCursosUpdate}
          validationSchema={validationSchemaGestionCursosUpdate} >
          <Form>
            <div className="flex w-full justify-center gap-2 p-4">
              <Field
                name={"name"}
                className={`flex-[0_1_11rem] outline-none rounded-md border-green-400/50 border focus:border-green-400 transition text-blue-500/80 p-2`}
                placeholder="Nombre del curso"
              />
              <Field as="select" name={`entorno`} className="flex-[0_1_11rem] border border-green-300/50 p-2 rounded-md text-blue-500/80"  >
                <option value="">Seleccione Entorno</option>
                <option value="PRESENCIAL">Presencial</option>
                {/* <option value="VIRTUAL">Virtual</option> */}
              </Field>
              <Field as="select" name={`horas`} className="flex-[0_1_11rem] border border-green-300/50 p-2 rounded-md text-blue-500/80"  >
                <option value="">Horas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
            </div>
            <div className="flex justify-center items-center mt-1" >
              <button type="submit" className="p-4 flex items-end rounded-xl hover:bg-green-200/10 border hover:text-black transition justify-center gap-1 text-white bg-[#3549ff]">
                <MdUpdate className="text-2xl" />
                Actualizar Información</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default FormUpdateCursos