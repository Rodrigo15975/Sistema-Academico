import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"
// import { useEffect } from 'react';

interface PropsSelectView {
  selectedOption: string,
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

const SelectViewGestionCursos = ({ selectedOption, setSelectedOption }: PropsSelectView) => {
  const { cursos } = stateGestionCursos()
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueUpper = e.target.value.toUpperCase();
    setSelectedOption(valueUpper);
  };

  //Arreglar el buscador select
  // useEffect(() => {
  //   if (selectedOption !== "") {
  //     setSelectedOption(selectedOption)
  //   }
  // }, [selectedOption]);


  return (
    <div className="p-4">
      <select
        onChange={handleOptionChange}
        value={selectedOption}
        className="border p-4 bg-green-400/5 border-blue-400/20 w-[20rem] outline-none rounded-3xl text-blue-500">
        <option value="">Filtra por curso</option>
        {cursos.map(value =>
          <option key={value.idDoc} value={value.name}>
            {value.name}
          </option>)}
      </select>
    </div>
  )
}

export default SelectViewGestionCursos