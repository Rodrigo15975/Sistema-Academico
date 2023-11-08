interface FnStateListadoEstudiantes {
  onChangeSelect: (value: string) => void
  onChangeInput: (value: string) => void
  getDB_ListEstudiantes: (datA: GetDBMatriculados[]) => Promise<void>
  onChangeMatriculados: (value: string) => void
}


interface MainStateListadoEstudiantes extends FnStateListadoEstudiantes {
  searchDni: string,
  searchSelect: string
  DB_ListEstudiantes: GetDBMatriculados[]
  searchMatriculados: string
}