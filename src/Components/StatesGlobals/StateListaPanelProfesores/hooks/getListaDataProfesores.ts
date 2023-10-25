// import {
//   collection,
//   dbFire,
//   query,
//   where,
//   onSnapshot,
// } from "../../../../firebase/Config/firestore";

// export const getListaDataProfesores = async () => {
//   try {
//     const db = collection(dbFire, "profesores");
//     const q = query(db, where("role", "==", "PROFESOR"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const newProfesoresData: GetDataListaProfesores[] = snapshot.docs.map(
//         (docs) => ({
//           ...(docs.data() as GetDataListaProfesores), // Asegúrate de hacer un casting explícito a GetDataListaProfesores
//           idDoc: docs.id,
//         })
//         );      
//       return newProfesoresData;
//     });
//   } catch (error) {
//     console.error("Error al obtener datos de Firestore:", error);
//     throw new Error("No se pudieron obtener los datos de profesores");
//   }
// };
