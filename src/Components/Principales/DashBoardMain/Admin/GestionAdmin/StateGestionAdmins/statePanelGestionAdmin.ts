import { create } from "zustand";
import { dbFire, onSnapshot, collection, query, where } from "../../../../../../firebase/Config/firestore";
import Roles from "../../../../../Enums/Roles";

const statePanelGestionAdmin = create<MainPanelGestionAdmin>((set) => ({
  DB_Admins: [],
  suscribe: null,
  search: "",
  async read_DB_AdminGestion() {
    try {
      const refCollection = collection(dbFire, "/profesores");
      const q = query(refCollection, where("role", "==", Roles.administrador))

      const unSuscribe = onSnapshot(q, (docs) => {
        const data = docs.docs.map(admins => admins.data() as AdminsData)
        set({ DB_Admins: data })
      })
      set({ suscribe: unSuscribe })
    } catch (error) {
      console.log(error);
    }
  },
  async deleteAdminGestion(uid) {
    try {
      console.log(uid);
    } catch (error) {
      console.log(`error al eliminar el doc del admin ${error}`);
    }
  },
  //Actualizar nuevo datos
  //Flata configurar para el update
  async updateDataAdminGestion(data, uid, resetForm) {
    try {
      resetForm()
      console.log(data, uid);
    } catch (error) {
      console.log(`Erro al actualizar el doc del admin ${error}`);

    }
  },
  onChangeDni(value) {
    set({ search: value })
  },

}))

export default statePanelGestionAdmin




