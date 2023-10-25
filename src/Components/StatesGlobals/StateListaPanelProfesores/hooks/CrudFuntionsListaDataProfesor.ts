import { deleteDoc, dbFire, doc } from "../../../../firebase/Config/firestore";
export const deletListaDataProfesor = async (idDoc: string) => {
  if (!idDoc) return console.error(`Error, al eliminar o con el uid ${idDoc}`);
  try {
    const refDb = doc(dbFire, `profesores`, idDoc);
    await deleteDoc(refDb); 
    console.log(`Borrado exitosamente id: ${idDoc}`);
    return;
  } catch (error) {
    console.log(error);
    throw new Error(`Error al eliminar al docente: ${error}`);
  }
};
