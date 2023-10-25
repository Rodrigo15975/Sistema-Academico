import HeaderGestioneEstudiantes from "../HeaderGestioneEstudiantes"
import { PiUsersThreeThin } from "react-icons/pi";
import OptionsMatricula from "./OptionsMatricula";
import stateMatriculasAbiertas from "./StateMatriculasAbiertas/StateMatriculasAbiertas";
import FormMatriculaNuevo from "./FormNuevo/FormMatriculaNuevo";
import FormRepitente from "./FormRepitente/FormRepitente";
import FormConcurso from "./FormConcurso/FormConcurso";

const enum MatriculaOptions {
  nuevo = "NUEVO",
  repitente = "REPITENTE",
  concurso = "CONCURSO",
}

const MatriculasAbiertas = ({ clicked }: PropBtnClose) => {
  const { alumnOption, changeOption } = stateMatriculasAbiertas()

  const updateOption = () => {
    //Probar con el Enum, para darle valores estaticos
    changeOption("NUEVO")
    clicked()
  }

  const renderComponent = () => {
    if (alumnOption === MatriculaOptions.nuevo) return <FormMatriculaNuevo />;
    else if (alumnOption === MatriculaOptions.repitente) return <FormRepitente />;
    else if (alumnOption === MatriculaOptions.concurso) return <FormConcurso />;
    // Puedes manejar un caso por defecto si es necesario
    return null;
  };

  return (
    <div className="flex flex-col bg-white min-h-screen flex-[0_1_60rem]">
      <HeaderGestioneEstudiantes cliCked={updateOption} icon={<PiUsersThreeThin className="text-4xl" />} title="Matricula Abierta" />
      <div className="p-4">
        <p className="my-4 text-xl text-blue-600 border-b border-t py-2 border-blue-500/50" >Opción de Matricula</p>
        <OptionsMatricula />
      </div>
      <div className="mt-3 px-4">
        <div className="min-h-[40rem] border border-blue-500/10 rounded-lg shadow-lg bg-blue-500/20" >
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default MatriculasAbiertas