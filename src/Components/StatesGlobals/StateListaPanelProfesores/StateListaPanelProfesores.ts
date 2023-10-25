import { create } from "zustand";
import { deletListaDataProfesor } from "./hooks/CrudFuntionsListaDataProfesor";
const stateListaPanelProfesores = create<StateListaPanel>((set, get) => ({
  listaDeProfesoresDB: [],
  listaDeProfesoresOriginal: [],
  loadingList: true,
  deleteIsTrue: false,
  valueSearch: "",
  changeValueSearch(e) {
    const upValue = e.toLocaleUpperCase();
    const { listaDeProfesoresOriginal } = get();
    if (upValue !== "") {
      const filteredProfesor = listaDeProfesoresOriginal.filter((profesor) =>
        profesor.name.includes(upValue)
      );
      set({ listaDeProfesoresDB: filteredProfesor });
    } else {
      // Restaura la lista original
      set({ listaDeProfesoresDB: listaDeProfesoresOriginal });
    }
  },
  async getDataListProfesor(data: GetDataListaProfesores[]) {
    try {
      set({ listaDeProfesoresDB: data, listaDeProfesoresOriginal: data });
    } catch (error) {
      console.log(error);
      if (error instanceof Error)
        return console.error(
          "Error al obtener la lista de profesores:",
          error.message
        );
    } finally {
      set({ loadingList: false });
    }
  },
  async deleteListProfesor(idDoc) {
    try {
      await deletListaDataProfesor(idDoc);
    } catch (error) {
      console.error(`Ocurrio un error al eliminar el doc ${error}}`);
      throw new Error(`${error}`);
    }
  },
  deleteIstrueUpdate: () => {
    const { deleteIsTrue } = get();
    set({ deleteIsTrue: !deleteIsTrue });
  },
}));

export default stateListaPanelProfesores;
