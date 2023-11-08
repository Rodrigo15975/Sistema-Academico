import { create } from "zustand";
import { format } from "date-fns";
import { addDocument, deleteDocument, updateDocument } from "../controllers/Controllers-Firestore";


const stateGestionCursos = create<MainGestionCursos>((set, get) => ({
  cursos: [],
  loadignCreateCurso: false,
  date: new Date(),
  currentDate: "",
  openAddCursos: false,
  cursoExisting: false,
  unSuscribe() { },
  async onSubmitDataCursos(data, resetForm) {
    set({ loadignCreateCurso: true })
    const { addDocumentCursos, currentDate } = get();
    for (const cursos of data.nuevosCursos) {
      const completeData = {
        ...cursos,
        name: cursos.name.toUpperCase(),
        fecha: currentDate
      }
      await addDocumentCursos(completeData)
      resetForm()
    }
  },

  getReadCursos(data) {
    try {
      set({ cursos: data })
    } catch (error) {
      console.log(`Error al obtener los documentos ${error}`);
      return;
    }
  },

  async addDocumentCursos(data) {

    try {
      await addDocument("/cursos", data)
    } catch (error) {
      console.log("Ocurrio un erro al enviar los datos");
      return
    }
  },
  async deleteDocumentCursos(idDoc) {
    try {
      await deleteDocument("/cursos", idDoc)
    } catch (error) {
      console.log(`Erro al eliminar el doc ${error}`);

    }
  },

  async updateDocumentCursos(data, idDoc) {
    try {
      await updateDocument("/cursos", idDoc, data)
    } catch (error) {
      console.log(`Erro al Actualizar el doc ${error}`);
    }
  },

  setCursoExisting() {
    const { cursoExisting } = get()
    set({ cursoExisting: !cursoExisting })
  },
  setLoadingCreateCurso() {
    const { loadignCreateCurso } = get()
    set({ loadignCreateCurso: !loadignCreateCurso })
  },
  setOpenAddCursos() {
    const { openAddCursos } = get()
    set({ openAddCursos: !openAddCursos })
  },

  updateDate() {
    const { date } = get();
    const formattedDate = format(date, "dd/MM/yyyy");
    set({ currentDate: formattedDate });
  },
}))

export default stateGestionCursos