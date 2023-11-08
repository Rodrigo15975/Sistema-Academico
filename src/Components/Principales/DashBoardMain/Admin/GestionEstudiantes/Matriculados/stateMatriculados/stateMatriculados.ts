import { create } from "zustand";

const stateMatriculados = create<MainStateMatriculados>((set) => ({
  dbMatriculados: [],
  search: "",
  async getReadMatriculados(data) {
    set({ dbMatriculados: data })
  },
  onChangeSearch: (value) => {
    set({ search: value })
  }
}))

export default stateMatriculados