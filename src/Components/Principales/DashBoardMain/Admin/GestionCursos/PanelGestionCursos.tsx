import ListCursosGestion from "./ListCursosGestion"
import SelectViewGestionCursos from "./SelectViewGestionCursos"
import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"
import { useEffect, useState } from 'react';
import { dbFire, onSnapshot, collection } from "../../../../../firebase/Config/firestore";

const PanelGestionCursos = () => {
  const { cursos, getReadCursos } = stateGestionCursos()
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(dbFire, "/cursos"), (dbCollection) => {
      const cursosData: GetReadCursos[] = dbCollection.docs.map(cursos => ({ ...cursos.data(), idDoc: cursos.id }) as GetReadCursos)
      getReadCursos(cursosData)
    });
    return () => unsubscribe()
  }, [getReadCursos]);

  const filteredCursos = cursos.filter((curso) =>
    selectedOption ? curso.name === selectedOption : true
  );

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full border-t shadow-lg rounded-xl min-h-[65vh]">
      <div className="flex-[0_1_2rem] w-full border-b flex border-blue-400/50 justify-between items-center">
        <SelectViewGestionCursos
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="flex-[0_1_33rem] gap-3 flex items-start justify-center flex-wrap w-full p-4">
        {cursos.length > 0 ? filteredCursos.map(data => <ListCursosGestion key={data.idDoc} cursos={data} />) : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default PanelGestionCursos