import { Field, Formik, FormikHelpers, Form } from "formik"
import { FaUserGraduate } from "react-icons/fa"
import InputDniClean from "./InputDniClean"
import { BiSave } from "react-icons/bi"
import { initialValueNewStudentClean, validationSchemaNewStudentClean } from "./InitialValidationClean"
import stateStudentClean from "./StateStudentClean"

const FormStudentClean = () => {
  const { onSubmitNewStudentClean } = stateStudentClean()
  const onSubmitSend = (data: NewStudent, helper: FormikHelpers<NewStudent>) => {
    const { resetForm } = helper
    onSubmitNewStudentClean(data, resetForm)
  }
  const disabledInputs = true
  return (
    <div className="p-4 flex items-center min-h-[43rem] justify-center">
      <div className="flex-[0_1_28rem] min-h-[40rem] rounded-3xl shadow-lg bg-white">
        <>
          <Formik
            onSubmit={onSubmitSend}
            initialValues={initialValueNewStudentClean}
            validationSchema={validationSchemaNewStudentClean}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form className="font-titleFontLogin flex flex-col min-h-[40rem] items-center justify-center gap-3 p-4">
                <div className="mb-5">
                  <p className="text-2xl flex items-center justify-center gap-2 text-black/50">
                    <FaUserGraduate />
                    Estudiante Sin cursos
                  </p>
                </div>
                <InputDniClean errors={errors} setFields={setFieldValue} touched={touched} dni={values.dni} />
                <Field disabled={disabledInputs} name="nombres" className={`pl-2 border   focus:bg-blue-600/10 outline-none w-[20rem] h-[2.5rem] rounded-md ${errors.nombres && touched.nombres ? 'border-red-500/30' : ''
                  }`} placeholder="Nombres" />
                <Field disabled={disabledInputs} name="apellidos" className={`pl-2 border  focus:bg-blue-600/10 outline-none w-[20rem] h-[2.5rem] rounded-md ${errors.apellidos && touched.apellidos ? 'border-red-500/30' : ''
                  }`} placeholder="Apellidos" />
                <div className="flex gap-1">
                  <Field type="date" disabled={disabledInputs} name="fechaNacimiento" className={`border focus:bg-blue-600/10 outline-none pl-2 text-black/50 w-[14.8rem] h-[2.5rem] rounded-md ${errors.fechaNacimiento && touched.fechaNacimiento ? 'border-red-500/30' : ''
                    }`} />
                  <Field as="select" disabled={disabledInputs} name="sexo" className={`border focus:bg-blue-600/10 outline-none w-[5rem] text-black/50 text-center h-[2.5rem] rounded-md ${errors.sexo && touched.sexo ? 'border-red-500/30' : ''
                    }`}>
                    <option value="">Sexo</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </Field>
                </div>
                <Field name="telefono" disabled={disabledInputs} className={`pl-2 
              border outline-none w-[20rem] h-[2.5rem]
               focus:bg-blue-600/10 rounded-md ${errors.telefono && touched.telefono ? 'border-red-500/30' : ''
                  }`}
                  placeholder="Teléfono"
                />

                <div className="flex gap-2 justify-between w-[20rem]">
                  <Field name="grado" disabled={disabledInputs} as="select" className={`pl-2 
              border outline-none w-[9.7rem] h-[2.5rem]
               focus:bg-blue-600/10 rounded-md text-black/50 ${errors.grado && touched.grado ? 'border-red-500/30' : ''
                    }`
                  }
                  >
                    <option value="">Grado</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Field>

                  <Field name="seccion" disabled={disabledInputs} className={`pl-2 
              border outline-none w-[9.7rem] h-[2.5rem]
               focus:bg-blue-600/10 rounded-md text-black/50 ${errors.seccion && touched.seccion ? 'border-red-500/30' : ''
                    }`
                  }
                    as="select"
                  >
                    <option value="">Sección</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Field>
                </div>
                <div className="flex gap-2 mt-4 flex-col items-end">
                  <button type="submit" className="w-[20rem] rounded-md border bg-blue-400/80 hover:bg-blue-900 flex items-center justify-center gap-2 h-[2.5rem] text-white hover:text-white transition">
                    <BiSave className="text-2xl" />
                    Registrar Matricula
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      </div>
    </div>
  )
}

export default FormStudentClean
