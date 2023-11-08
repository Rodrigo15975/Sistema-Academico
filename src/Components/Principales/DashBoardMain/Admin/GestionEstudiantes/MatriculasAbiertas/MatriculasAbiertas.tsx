import HeaderGestioneEstudiantes from "../HeaderGestioneEstudiantes"
import { PiUsersThreeThin } from "react-icons/pi";
import OptionsMatricula from "./OptionsMatricula";
import stateMatriculasAbiertas from "./StateMatriculasAbiertas/StateMatriculasAbiertas";
import FormMatriculaNuevo from "./FormNuevo/FormMatriculaNuevo";
import FormRepitente from "./FormRepitente/FormRepitente";
import FormConcurso from "./FormConcurso/FormConcurso";
import MatriculaOptions from "../../../../../Enums/MatriculaOptions";
import FormStudentClean from "./FormStudentClean/FormStudentClean";
import stateNewStudent from "./FormNuevo/StateNuevo/StateNewStudent";
import TemplateModalMessage from "../../../../../TemplateModalMessage";
import { useEffect } from 'react';
import stateRepitente from "./FormRepitente/StateRepitente";
import stateConcurso from "./FormConcurso/StateConcurso";
import stateStudentClean from "./FormStudentClean/StateStudentClean";


const MatriculasAbiertas = ({ clicked }: PropBtnClose) => {
  const { alumnOption, changeOption } = stateMatriculasAbiertas()
  const { existingStudentNew, updateExistingStudentNew, updateSuccesCreatingStudent, successCreatingStudent } = stateNewStudent()
  const { studentNotFound, studentUpdateNotFound, updateNormalBtnDisable } = stateRepitente()
  const { studentNotFoundConcurso, studentUpdateNotFoundConcurso } = stateConcurso()
  const { studentNotFoundClean, studentUpdateNotFoundClean } = stateStudentClean()
  //Funcion para cerrar la matricula
  const updateOption = () => {
    //Probar con el Enum, para darle valores estaticos
    changeOption(MatriculaOptions.nuevo)
    updateNormalBtnDisable()
    clicked()
  }

  const renderComponent = () => {
    if (alumnOption === MatriculaOptions.nuevo) return <FormMatriculaNuevo />;
    else if (alumnOption === MatriculaOptions.repitente) return <FormRepitente />;
    else if (alumnOption === MatriculaOptions.concurso) return <FormConcurso />;
    else if (alumnOption === MatriculaOptions.limpio) return <FormStudentClean />;
    return null;
  };

  useEffect(() => {
    const idTime = setInterval(() => {
      if (existingStudentNew) updateExistingStudentNew()
    }, 2000)

    const idTimeTwo = setInterval(() => {
      if (successCreatingStudent) updateSuccesCreatingStudent()
    }, 2500)

    const idTimeThree = setInterval(() => {
      if (studentNotFound) studentUpdateNotFound()
    }, 2500)
    const idTimeFourth = setInterval(() => {
      if (studentNotFoundConcurso) studentUpdateNotFoundConcurso()
    }, 2500)

    const idTimeFive = setInterval(() => {
      if (studentNotFoundClean) studentUpdateNotFoundClean()
    }, 2500)

    return () => (clearInterval(idTime), clearInterval(idTimeFive), clearInterval(idTimeTwo), clearInterval(idTimeThree), clearInterval(idTimeFourth))
  }, [existingStudentNew, updateExistingStudentNew,studentNotFoundClean, studentUpdateNotFoundClean, updateSuccesCreatingStudent, studentNotFoundConcurso, studentUpdateNotFoundConcurso, studentUpdateNotFound, studentNotFound, successCreatingStudent]);

  return (
    <div className="flex flex-col bg-white min-h-screen flex-[0_1_60rem]">
      {existingStudentNew && <TemplateModalMessage classNameChildren="p-4 bg-rose-600/80 animate-fade-up animate-once animate-duration-1000 rounded-md text-white" className="fixed inset-0 flex items-center justify-center z-[100]" text="El estudiante ya se encuentra matriculado" />}
      {studentNotFound && <TemplateModalMessage classNameChildren="p-4 bg-rose-600/90 animate-fade-up animate-once animate-duration-1000 rounded-md text-white" className="fixed inset-0 flex items-center justify-center z-[100]" text="Estudiante no encontrado" />}
      {successCreatingStudent && <TemplateModalMessage classNameChildren="p-4 bg-green-400/80 animate-fade-up animate-once animate-duration-1000 rounded-md text-white" className="fixed inset-0 flex items-center justify-center z-[100]" text="Estudiante matriculado" />}
      {studentNotFoundConcurso && <TemplateModalMessage classNameChildren="p-4 bg-rose-600/90 animate-fade-up animate-once animate-duration-1000 rounded-md text-white" className="fixed inset-0 flex items-center justify-center z-[100]" text="Estudiante no encontrado" />}
      {studentNotFoundClean && <TemplateModalMessage classNameChildren="p-4 bg-rose-600/90 animate-fade-up animate-once animate-duration-1000 rounded-md text-white" className="fixed inset-0 flex items-center justify-center z-[100]" text="Estudiante no encontrado" />}
      <HeaderGestioneEstudiantes cliCked={updateOption} icon={<PiUsersThreeThin className="text-4xl" />} title="Matricula Abierta" />
      <div className="p-4">
        <p className="my-4 text-xl text-blue-600 border-b border-t py-2 border-blue-500/50" >Opción de Matricula</p>
        <OptionsMatricula />
      </div>
      <div className="mt-3 px-4">
        <div className="min-h-[43rem] border border-blue-500/10 rounded-lg shadow-lg bg-blue-500/5" >
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default MatriculasAbiertas