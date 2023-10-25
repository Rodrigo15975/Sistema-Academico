import { Field, FieldArray, Formik, Form, ErrorMessage } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";
import stateRegisterNewProfesor from "../../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";
import { curso, dia, grado, horario, seccion } from "./Cursos";
import { initialValuesAsignaciones, validationSchemaAsignaciones } from "./initialValueAsignaciones";
import { AiOutlineDelete, AiOutlineFolderAdd,AiOutlineSave } from "react-icons/ai";
const PanelAsignacionesNewProfesor = () => {
  const { onSubmitAddAsignaciones, btnDisable } = stateRegisterNewProfesor()
  return (
    <>
      <p className="text-xl text-center text-blue-700 underline-offset-2 underline font-extralight font-titleFontLogin">Seleccione Asignaciones</p>
      <>
        <Formik
          initialValues={initialValuesAsignaciones}
          onSubmit={onSubmitAddAsignaciones}
          validationSchema={validationSchemaAsignaciones}  >
          {({ values }) => (
            <Form className="h-full">
              <FieldArray name="asignacionesProfesor" >
                {({ push, remove }) => (
                  <div className="flex justify-center items-center gap-3 mb-6 flex-col mt-4 pb-4" >
                    {
                      values.asignacionesProfesor.map((_, index) => (
                        <div key={index} className="flex gap-2 relative w-full text-blue-400 font-titleFontLogin justify-center" >
                          <div className="flex flex-col flex-[0_1_8rem]">
                            <Field as="select" name={`asignacionesProfesor.${index}.curso`} className="outline-none border p-2 rounded-md border-[#27F3BE]/50" >
                              <option value="">Cursos</option>
                              <option value={curso.comunicacion}>Comunicación</option>
                              <option value={curso.matematica}>Matemática</option>
                              <option value={curso.fisica}>Física</option>
                              <option value={curso.educacionF}>Educación Física</option>
                              <option value={curso.comunicacion}>Comunicación</option>
                            </Field>
                          </div>
                          <div className="flex flex-col flex-[0_1_8rem]">
                            <Field as="select" name={`asignacionesProfesor.${index}.dia`} className="outline-none border p-2 rounded-md border-[#27F3BE]/50">
                              <option value="">Dias</option>
                              <option value={dia.lunes}>Lunes</option>
                              <option value={dia.martes}>Martes</option>
                              <option value={dia.miercoles}>Miércoles</option>
                              <option value={dia.jueves}>Jueves</option>
                              <option value={dia.viernes}>Viernes</option>
                            </Field>
                          </div>
                          <div className="flex flex-col flex-[0_1_8rem] relative">
                            <Field as="select" name={`asignacionesProfesor.${index}.grado`} className="outline-none border p-2 rounded-md border-[#27F3BE]/50">
                              <option value="">Grados</option>
                              <option value={grado.primero}>1</option>
                              <option value={grado.segundo}>2</option>
                              <option value={grado.tercero}>3</option>
                              <option value={grado.cuarto}>4</option>
                              <option value={grado.quinto}>5</option>
                            </Field>
                          </div>
                          <div className="flex flex-col flex-[0_1_8rem] relative">
                            <Field as="select" name={`asignacionesProfesor.${index}.horario`} className="outline-none border p-2 rounded-md border-[#27F3BE]/50">
                              <option value="">Horario</option>
                              <option value={horario.primerHorario}>7:45AM:9:45AM</option>
                              <option value={horario.segundorHorario}>9:45AM:10:45AM</option>
                              <option value={horario.tercerHorario}>10:45AM: 11:45AM</option>
                              <option value={horario.cuartoHorario}>11:45AM: 1:45PM</option>
                            </Field>
                          </div>
                          <div className="flex flex-col flex-[0_1_8rem] relative">
                            <Field as="select" name={`asignacionesProfesor.${index}.seccion`} className="outline-none border p-2 rounded-md border-[#27F3BE]/50">
                              <option value="">Secciones</option>
                              <option value={seccion.a}>A</option>
                              <option value={seccion.b}>B</option>
                              <option value={seccion.c}>C</option>
                              <option value={seccion.d}>D</option>
                            </Field>
                          </div>
                          <div className="text-2xl cursor-pointer hover:scale-105 transition bg-titleDashboards text-white flex p-2 rounded-lg items-center justify-center" onClick={() => remove(index)}><AiOutlineDelete /></div>
                          <ErrorMessage name={`asignacionesProfesor.${index}.curso`} component="div" className="absolute bottom-0" />
                        </div>
                      ))
                    }
                    <button type="submit" onClick={() => push({})} className="flex rounded-md mt-3 text-white hover:scale-105 transition gap-3 items-center justify-center bg-blue-400 p-4">Asignaciones
                      <AiOutlineFolderAdd className="text-3xl" />
                    </button>
                  </div>
                )}

              </FieldArray>
              <div className="w-full flex justify-end p-2">
                <button disabled={btnDisable} type="submit" className="flex-[0_1_15rem] h-[3rem] hover:border-2 hover:border-black transition bg-[#80ffd2] rounded-md flex items-center justify-center gap-3" >
                  Registrar información
                    <AiOutlineSave className="text-2xl"/>
                  </button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    </>
  );
};

export default PanelAsignacionesNewProfesor;
