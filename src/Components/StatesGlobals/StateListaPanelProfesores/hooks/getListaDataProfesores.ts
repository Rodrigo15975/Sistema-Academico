import {
  collection,
  dbFire,
  getDocs,
  query,
  where,
} from "../../../../firebase/Config/firestore";
export const getListaDataProfesores = async () => {
  try {
    const db = collection(dbFire, "profesores");
    const q = query(db, where("role", "==", "PROFESOR"));
    const snapshot = await getDocs(q);
    const profesoresData = snapshot.docs.map((doc) => ({...doc.data(), idDoc: doc.id, }) as GetDataListaProfesores);
     return profesoresData
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    throw new Error("No se pudieron obtener los datos de profesores");
  }
};
