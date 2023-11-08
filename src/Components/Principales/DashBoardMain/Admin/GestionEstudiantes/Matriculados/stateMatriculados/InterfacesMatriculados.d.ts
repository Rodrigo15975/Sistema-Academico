
interface GetDBMatriculados extends NewStudent {
  idDoc: string
}


interface FunctionsMatriculados {
  getReadMatriculados: (data: GetDBMatriculados[]) => Promise<void>
}

interface MainStateMatriculados extends FunctionsMatriculados {
  dbMatriculados: GetDBMatriculados[]
  search: string,
  onChangeSearch: (value: string) => void
}