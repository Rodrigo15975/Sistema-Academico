import { create } from "zustand";

const stateListadoEstudiantes = create<MainStateListadoEstudiantes>((set) => ({
  searchSelect: "",
  searchDni: "",
  DB_ListEstudiantes: [],
  searchMatriculados: "",
  searchGradue: "",
  selectSection: "",
  valueSection: "A",
  onChangeSection(value) {
    set({ selectSection: value })
  },
  onChangeValueSection(value) {
    set({ valueSection: value })
  },
  onChangeMatriculados(value) {
    set({ searchMatriculados: value })
  },

  async getDB_ListEstudiantes(data) {
    set({ DB_ListEstudiantes: data })
  },
  onChangeInput(value) {
    console.log(value);
    set({ searchDni: value })
  },
  onChangeSelect(value) {
    set({ searchSelect: value })
  },
  onChangeGradeValue(value) {
    set({ searchGradue: value })
  },
}))

export default stateListadoEstudiantes