import { create } from "zustand";
import {
  dbFire,
  collection,
  query,
  where,
  getDocs,
} from "../../../../firebase/Config/firestore";
const statePerfil = create<MainStateGetPerfilAdmin>((set) => ({
  adminPerfil: {
    apellidos: "",
    correo: "",
    dni: "",
    nombres: "",
    password: "",
    role: "",
    uid: "",
  },
  async fetchDataFromFirestoreAdmin(uid) {
    try {
      const collectionRef = collection(dbFire, "profesores");
      const q = query(collectionRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size !== 0) {
        const getPerfilDoc =
          querySnapshot.docs[0].data() as GetValuePerfilAdmin;
        set({ adminPerfil: getPerfilDoc });
        return;
      }
    } catch (error) {
      console.log(`Error al obtener el documento: ${error}`);
    }
  },
}));

export default statePerfil;
