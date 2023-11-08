//Interfas para validar
interface InitialCursosData {
  nuevosCursos: [
    {
      name: string,
      entorno: string
      horas: string
    }
  ]
}

//Interfas para actualizar nuevos datos

interface InitialNewCursos {
  name: string,
  entorno: string
  horas: string
}

///interfaces para  agregar doc
interface AddDocData {
  fecha: string
  name: string,
  entorno: string
  horas: string
}

// interfaces para leer los cursos y agregar doc
interface GetReadCursos {
  name: string,
  entorno: string
  horas: string
  idDoc: string
  fecha: string
}


//-------------

// onSnapshot(collection(dbFire, '/cursos'), (cursos) => {
//   const docCursos: GetDataReadCursos[] = cursos.docs.map(data => ({
//     ...data.data(),
//   }) as GetDataReadCursos)
//   const todosLosCursos = docCursos.flatMap(curso => curso.cursos);
//   set({ cursos: todosLosCursos })
// });

interface FnGestionCursos {
  setOpenAddCursos: () => void
  onSubmitDataCursos: (data: InitialCursosData, resetForm: () => void) => void
  updateDate: () => void
  addDocumentCursos: (data: AddDocData) => Promise<void>
  deleteDocumentCursos: (idDoc: string) => Promise<void>
  updateDocumentCursos: (data: InitialNewCursos,idDoc: string) => Promise<void>
  setLoadingCreateCurso: () => void
  getReadCursos: (data: GetReadCursos[]) => void
  setCursoExisting: () => void
}



interface MainGestionCursos extends FnGestionCursos {
  openAddCursos: boolean
  date: Date,
  loadignCreateCurso: boolean
  cursos: GetReadCursos[]
  currentDate: string
  cursoExisting: boolean
  unSuscribe: (() => void)
}