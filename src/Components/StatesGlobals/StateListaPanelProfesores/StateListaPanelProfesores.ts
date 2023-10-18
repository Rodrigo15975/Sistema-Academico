import { create } from "zustand";
import { getListaDataProfesores } from "./hooks/getListaDataProfesores";
import { deletListaDataProfesor } from "./hooks/deleteListaDataProfesor";
const stateListaPanelProfesores = create<StateListaPanel>((set, get) => ({
  listaDeProfesoresDB: [],
  loadingList: true,
  deleteIsTrue: false,
  async getDataListProfesor() {
    try {
      const listaProfesores = await getListaDataProfesores();
      //Probar con el console, por que no renderiza o cambia los datos 
      // cuando elimino o lago arregalar
      set({ listaDeProfesoresDB: listaProfesores });
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
