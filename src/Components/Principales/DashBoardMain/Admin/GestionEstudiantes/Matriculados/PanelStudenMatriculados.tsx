import ListStudentMatriculados from "./ListStudentMatriculados"
import SearchStudentMatriculados from "./SearchStudentMatriculados"
import stateMatriculados from "./stateMatriculados/stateMatriculados"
import { useEffect, useState } from 'react';

import { onSnapshot, collection, dbFire, where, query } from "../../../../../../firebase/Config/firestore";
const PanelStudenMatriculados = () => {
  const { getReadMatriculados, dbMatriculados, search } = stateMatriculados()
  const [dbClone, setDbClone] = useState<GetDBMatriculados[]>([]);
  useEffect(() => {
    const q = query(collection(dbFire, '/estudiantes'), where('alumnoMatriculado', '==', true));
    const unsubscribe = onSnapshot(q, (dbCollection) => {
      const cursosData: GetDBMatriculados[] = dbCollection.docs.map(cursos => ({ ...cursos.data(), idDoc: cursos.id }) as GetDBMatriculados)
      getReadMatriculados(cursosData)
    });
    return () => unsubscribe()
  }, [getReadMatriculados]);


  useEffect(() => {
    // ya falta filtrar en la lista por dni de los alumnos
    const filteredDni = dbMatriculados.filter((alum) => alum.dni.includes(search))
    setDbClone(filteredDni)
  }, [dbMatriculados, search]);


  return (
    <div className="flex p-4 flex-col gap-4 shadow-md border-blue-500/10 shadow-blue-500/10 flex-[0_1_90rem] rounded-2xl border min-h-[70vh]">
      <div className="flex-[0_1_5rem] border-b flex items-center justify-end">
        <SearchStudentMatriculados />
      </div>
      <div className="flex gap-4 flex-wrap items-center overflow-y-scroll justify-center flex-[0_1_30rem] ">
        {dbClone.length > 0 ? dbClone.map(cursos => <ListStudentMatriculados data={cursos} key={`Lista-Alumno-${cursos.idDoc}`} />) : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default PanelStudenMatriculados