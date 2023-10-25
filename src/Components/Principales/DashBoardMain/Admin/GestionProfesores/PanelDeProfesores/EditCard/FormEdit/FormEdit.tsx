import { LiaSave } from "react-icons/lia";
import { Field, Form, Formik } from "../../../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { initialValueFormEdit, initialValueSchemaFormEdit } from "./InitialValuesFormEdit";
import stateEditCard from "../StateEditCard";

const FormEdit = () => {
  const { getDataFormEdit, btnDisableFormEdit, } = stateEditCard()
  const dataForm = async (data: AsignacionesProfesor) => getDataFormEdit(data)

  return (
    <>
      <Formik
        initialValues={initialValueFormEdit}
        validationSchema={initialValueSchemaFormEdit}
        onSubmit={dataForm}
      >
        {({ errors, touched }) => (
          <>
            <Form className="flex flex-col justify-between gap-2 p-4">
              <div className="flex justify-center gap-2">
                <>
                  <Field name="curso" as="select" className={`${errors.curso && touched.curso ? 'border-red-500' : ''}  outline-none border flex-[0_1_8rem] p-1 focus-border-blue-500/50 text-blue-500 rounded-md hover-border-black/80 transition`}>
                    <option value="">Cursos</option>
                    <option value="Comunicación">Comunicación</option>
                    <option value="Matemática">Matemática</option>
                    <option value="Física">Física</option>
                    <option value="Educación Física">Educación Física</option>
                  </Field>
                </>
                <>
                  <Field name="dia" as="select" className={`${errors.dia && touched.dia ? 'border-red-500' : ''} outline-none border flex-[0_1_8rem] p-1 focus-border-blue-500/50 text-blue-500 rounded-md hover-border-black/80 transition`}>
                    <option value="">Días</option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miércoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                  </Field>
                </>
                <>
                  <Field name="grado" as="select" className={`${errors.grado && touched.grado ? 'border-red-500' : ''} outline-none border flex-[0_1_8rem] p-1 focus-border-blue-500/50 text-blue-500 rounded-md hover-border-black/80 transition`}>
                    <option value="">Grados</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Field>
                </>
                <>
                  <Field name="horario" as="select" className={`${errors.horario && touched.horario ? 'border-red-500' : ''} outline-none border flex-[0_1_8rem] p-1 focus-border-blue-500/50 text-blue-500 rounded-md hover-border-black/80 transition`}>
                    <option value="">Horario</option>
                    <option value="7:45AM:9:45AM">7:45AM:9:45AM</option>
                    <option value="9:45AM:10:45AM">9:45AM:10:45AM</option>
                    <option value="10:45AM:11:45AM">10:45AM:11:45AM</option>
                    <option value="11:45AM:1:45PM">11:45AM:1:45PM</option>
                  </Field>
                </>
                <>
                  <Field name="seccion" as="select" className={`${errors.seccion && touched.seccion ? 'border-red-500' : ''} outline-none border flex-[0_1_8rem] p-1 focus-border-blue-500/50 text-blue-500 rounded-md hover-border-black/80 transition`}>
                    <option value="">Secciones</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Field>
                </>
              </div>
              <div className="flex justify-center py-2 mt-3">
                <button disabled={btnDisableFormEdit} type="submit" className={`p-3 bg-blue-500 rounded-md shadow-sm ${btnDisableFormEdit !== true ? "hover:bg-blue-600/50:" : ""} transition ${btnDisableFormEdit !== true ? "hover:scale-105" : ""} flex items-center justify-center gap-2 text-white`}>
                  <LiaSave className="text-2xl" />
                  Actualizar información</button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  )
}

export default FormEdit
