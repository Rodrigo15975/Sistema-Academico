import stateListadoEstudiantes from "./StateListadoEstudiantes/StateListadoEstudiantes";

const FiltradosListEstudiante = () => {
  const { onChangeInput, onChangeSelect, onChangeMatriculados, onChangeValueSection, onChangeGradeValue, searchGradue, onChangeSection } = stateListadoEstudiantes()


  const onChangeValueDni = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChangeInput(value)
  }
  const onChangeValueSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChangeSelect(value);
  }

  const onChangeMatriculadosValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChangeMatriculados(value)
  }

  const onChangeGradueValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChangeSection(value)
    onChangeGradeValue(value)
  }


  const valueSection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChangeValueSection(value)
  }


  return (
    <div className="flex gap-3 font-titleFontLogin items-center ">
      <div>
        <input
          onChange={onChangeValueDni}
          className="border p-2 outline-none pl-4 rounded-3xl shadow-md hover:shadow transition text-green-800/70 border-blue-500/50 w-[20rem]" type="text" placeholder="DNI" />
      </div>
      <div>
        <select
          onChange={onChangeValueSelect} className="border border-green-300/50 text-blue-500 shadow-md hover:shadow transition rounded-3xl outline-none p-2" name="" id="">
          <option value="">Categoria</option>
          <option value="REPITENTE">Repitente</option>
          <option value="CONCURSO">Concurso</option>
          <option value="SINCURSO">Sincurso</option>
          <option value="NUEVO">Nuevo</option>
        </select>
      </div>
      <div>
        <select
          onChange={onChangeMatriculadosValue} className="border border-green-300/50 text-blue-500 shadow-md hover:shadow transition rounded-3xl outline-none p-2" name="" id="">
          <option value="">Matriculas</option>
          <option value={`${true}`}>Matriculados</option>
          <option value={`${false}`}>No Matriculados</option>
        </select>
      </div>
      <div>
        <select
          onChange={onChangeGradueValue}
          className="border border-green-300/50 text-blue-500 shadow-md hover:shadow transition rounded-3xl outline-none p-2"
          name=""
          id=""
        >
          <option value="">Grado</option>
          <option value="1">Primero</option>
          <option value="2">Segundo</option>
          <option value="3">Tercero</option>
          <option value="4">Cuarto</option>
          <option value="5">Quinto</option>
        </select>
      </div>
      <div>
        {searchGradue && (
          <select
            className="border border-green-300/50 text-blue-500 shadow-md hover:shadow transition rounded-3xl outline-none p-2"
            onChange={valueSection}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        )}
      </div>
    </div >
  )
}

export default FiltradosListEstudiante