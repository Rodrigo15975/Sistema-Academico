interface FnStateListadoEstudiantes {
  onChangeSelect: (value: string) => void;
  onChangeInput: (value: string) => void;
  getDB_ListEstudiantes: (datA: GetDBMatriculados[]) => Promise<void>;
  onChangeMatriculados: (value: string) => void;
  onChangeGradeValue: (value: string) => void;
  onChangeSection: (value: string) => void;
  onChangeValueSection: (value: string) => void;
}

interface MainStateListadoEstudiantes extends FnStateListadoEstudiantes {
  searchDni: string;
  searchSelect: string;
  DB_ListEstudiantes: GetDBMatriculados[];
  searchMatriculados: string;
  searchGradue: string;
  selectSection: string;
  valueSection: string;
}
