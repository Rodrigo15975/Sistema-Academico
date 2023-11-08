import { FormikHelpers } from "formik"
import { BiSave } from "react-icons/bi"
import { FaUserGraduate } from "react-icons/fa"
import { initialValueNewStudent, validationSchemaNewStudent } from "./InitialValidations"
import stateNewStudent from "./StateNuevo/StateNewStudent"
import { useEffect, Field, Form, Formik } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { format } from "date-fns"

const FormMatriculaNuevo = () => {
  const { onSubmitNewStudent, updateDateToday } = stateNewStudent()
  const onSubmitSend = (data: NewStudent, helperFormik: FormikHelpers<NewStudent>) => {
    const { resetForm } = helperFormik
    onSubmitNewStudent(data, resetForm)
  }
  useEffect(() => {
    // const readStudents = async () => {
    //   const q = query(collection(dbFire, 'estudiantes'));
    //   const querySnapshot = await getDocs(q);
    //   const students = [];
    //   querySnapshot.forEach((doc) => {
    //     students.push({ id: doc.id, ...doc.data() });
    //   });
    //   return students;
    // };    
    const id = setInterval(() => {
      const date = new Date();
      const formattedDate = format(date, "dd/MM/yyyy HH:mm:ss");
      updateDateToday(formattedDate)
    }, 1000)
    return () => clearInterval(id)
  }, [updateDateToday]);

  return (
    <div className="p-4 flex items-center min-h-[43rem] justify-center">
      <div className="flex-[0_1_28rem] min-h-[40rem] rounded-3xl shadow-lg bg-white">
        <Formik
          onSubmit={onSubmitSend}
          initialValues={initialValueNewStudent}
          validationSchema={validationSchemaNewStudent} >
          {({ errors, touched }) => (
            <Form className="font-titleFontLogin flex flex-col min-h-[40rem] items-center justify-center gap-3 p-4">
              <div className="mb-5">
                <p className="text-2xl flex items-center justify-center gap-2 text-black/50">
                  <FaUserGraduate />
                  Nuevo estudiante
                </p>
              </div>
              <Field name="dni" className={`
              pl-2 border
               focus:bg-blue-600/10 
               outline-none w-[20rem]
                h-[2.5rem]
                 rounded-md ${errors.dni && touched.dni ? 'border-red-500/30' : ''

                }`} placeholder="DNI" />
              <Field name="nombres" className={`pl-2 border  focus:bg-blue-600/10 outline-none w-[20rem] h-[2.5rem] rounded-md ${errors.nombres && touched.nombres ? 'border-red-500/30' : ''
                }`} placeholder="Nombres" />
              <Field name="apellidos" className={`pl-2 border focus:bg-blue-600/10 outline-none w-[20rem] h-[2.5rem] rounded-md ${errors.apellidos && touched.apellidos ? 'border-red-500/30' : ''
                }`} placeholder="Apellidos" />
              <div className="flex gap-1">
                <Field type="date" name="fechaNacimiento" className={`border focus:bg-blue-600/10 outline-none pl-2 text-black/50 w-[14.8rem] h-[2.5rem] rounded-md ${errors.fechaNacimiento && touched.fechaNacimiento ? 'border-red-500/30' : ''
                  }`} />
                <Field as="select" name="sexo" className={`border focus:bg-blue-600/10 outline-none w-[5rem] text-black/50 text-center h-[2.5rem] rounded-md ${errors.sexo && touched.sexo ? 'border-red-500/30' : ''
                  }`}>
                  <option value="">Sexo</option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </Field>
              </div>
              <Field name="telefono" className={`pl-2 
              border outline-none w-[20rem] h-[2.5rem]
               focus:bg-blue-600/10 rounded-md ${errors.telefono && touched.telefono ? 'border-red-500/30' : ''
                }`}
                placeholder="Teléfono"
              />

              <div className="flex justify-between w-[20rem]">
                <Field name="grado" as="select" className={`pl-2 
              border outline-none w-[9.5rem] h-[2.5rem]
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
                <Field name="seccion" className={`pl-2 
              border outline-none w-[9.5rem] h-[2.5rem]
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
              <div>
                <button type="submit" className={`w-[20rem] rounded-md bg-blue-400 text-white mt-5 flex items-center justify-center gap-2 h-[2.5rem] text-black/50 transition`}>
                  <BiSave className="text-2xl" />
                  Registrar Matricula
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default FormMatriculaNuevo