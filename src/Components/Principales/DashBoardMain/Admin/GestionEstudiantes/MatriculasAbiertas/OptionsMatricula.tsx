import React from "react"
import stateMatriculasAbiertas from "./StateMatriculasAbiertas/StateMatriculasAbiertas"

const OptionsMatricula = () => {
  const { changeOption} = stateMatriculasAbiertas()

  const options = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value } = e.target
    changeOption(value)
  }
  return (
    <div className="flex">
      <select name="alumnOption" onChange={options} className=" text-blue-500 outline-none border flex-[0_1_20rem] h-[3rem] pl-3 rounded-md shadow-lg border-blue-500/50 ">
        <option className="mt-3" value={`NUEVO`}>Nuevo</option>
        <option className="mt-3" value={`REPITENTE`}>Repitente</option>
        <option className="mt-3" value={`CONCURSO`}>Con curso</option>
      </select>
    </div>
  )
}

export default OptionsMatricula
