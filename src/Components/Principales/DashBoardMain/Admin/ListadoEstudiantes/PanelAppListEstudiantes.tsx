import stateListadoEstudiantes from "./StateListadoEstudiantes/StateListadoEstudiantes";
import { useState, useEffect } from 'react';
import { dbFire, onSnapshot, query, collection } from "../../../../../firebase/Config/firestore";
import ListStudentMatriculados from "../GestionEstudiantes/Matriculados/ListStudentMatriculados";

const PanelAppListEstudiantes = () => {
  const { searchDni, searchSelect, getDB_ListEstudiantes, DB_ListEstudiantes, searchGradue, selectSection, valueSection, searchMatriculados } = stateListadoEstudiantes();
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
      const matriculadosMatch = searchMatriculados === '' || estudiante.alumnoMatriculado === JSON.parse(searchMatriculados);
      const gradoMatch = searchGradue === '' || estudiante.grado === searchGradue;

      // Ajusta la lógica para manejar el filtro de sección
      const sectionMatch = searchGradue === '' || selectSection === '' || (estudiante.grado === searchGradue && estudiante.seccion === valueSection);

      return dniMatch && categoriaMatch && matriculadosMatch && gradoMatch && sectionMatch;
    });

    setFilteredEstudiantes(filteredEstudiantes);
  }, [DB_ListEstudiantes, searchDni, searchSelect, searchMatriculados, searchGradue, selectSection, valueSection]);


  return (
    <div className="flex justify-center flex-wrap gap-4 my-4">
      {filteredEstudiantes.map(data => <ListStudentMatriculados key={data.idDoc} data={data} />)}
    </div>
  );
}

export default PanelAppListEstudiantes;
