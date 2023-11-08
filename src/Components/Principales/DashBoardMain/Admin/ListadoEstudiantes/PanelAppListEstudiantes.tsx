import stateListadoEstudiantes from "./StateListadoEstudiantes/StateListadoEstudiantes";
import { useState, useEffect } from 'react';
import { dbFire, onSnapshot, query, collection } from "../../../../../firebase/Config/firestore";
import ListStudentMatriculados from "../GestionEstudiantes/Matriculados/ListStudentMatriculados";

const PanelAppListEstudiantes = () => {
  const { searchDni, searchSelect, getDB_ListEstudiantes, DB_ListEstudiantes, searchMatriculados } = stateListadoEstudiantes();
  const [filteredEstudiantes, setFilteredEstudiantes] = useState<GetDBMatriculados[]>([]);

  useEffect(() => {
    const q = query(collection(dbFire, '/estudiantes'));
    const unsubscribe = onSnapshot(q, (dbCollection) => {
      const cursosData: GetDBMatriculados[] = dbCollection.docs.map(cursos => ({ ...cursos.data(), idDoc: cursos.id }) as GetDBMatriculados)
      getDB_ListEstudiantes(cursosData)
    });
    return () => unsubscribe()
  }, [getDB_ListEstudiantes]);

  useEffect(() => {
    const filteredEstudiantes = DB_ListEstudiantes.filter((estudiante) => {
      const dniMatch = estudiante.dni.includes(searchDni);
      const categoriaMatch = searchSelect === '' || estudiante.categoria === searchSelect;
      // searchMatriculados contiene una cadena como
      //  "true" o "false", y JSON.parse la convierte en un valor booleano
      //  (true o false). Esto permite compararla con estudiante.alumnoMatriculado, que parece ser un valor booleano.
      const matriculadosMatch = searchMatriculados === '' || estudiante.alumnoMatriculado === JSON.parse(searchMatriculados);
      return dniMatch && categoriaMatch && matriculadosMatch;
    });

    setFilteredEstudiantes(filteredEstudiantes);
  }, [DB_ListEstudiantes, searchDni, searchSelect, searchMatriculados]);

  return (
    <div className="flex justify-center gap-4 my-4">
      {filteredEstudiantes.map(data => <ListStudentMatriculados key={data.idDoc} data={data} />)}
    </div>
  );
}

export default PanelAppListEstudiantes;
