import { collection, addDoc, deleteDoc, dbFire, doc, updateDoc } from '../../../../../../firebase/Config/firestore';

// Ejemplo de función para agregar un documento a una colección
export const addDocument = async (collectionName: string, data: AddDocData) => {
  try {
    const db = collection(dbFire, collectionName);
    //Logica para verificar si existe con nombre el curso
    //LO DEJARE 
    // const { name } = data;
    // const q = query(db, where("name", "==", name))
    // const existingCourse = await getDocs(q)
    // if (existingCourse.size > 0) {
    //   existing()
    //   console.log(`Existe el mismo curso con nombre ${name}`);
    //   return
    // }
    const docRef = await addDoc(db, data);
    console.log('Documento agregado con ID: ', docRef.id);
    return

  } catch (error) {
    console.error('Error al agregar documento: ', error);
    return
  }
};

// Ejemplo de función para actualizar un documento
export const updateDocument = async (collectionName: string, docId: string, data: InitialNewCursos) => {
  try {
    const dbDoc = doc(dbFire, collectionName, docId)
    await updateDoc(dbDoc, { ...data });
    console.log('Documento actualizado con éxito');
  } catch (error) {
    console.error('Error al actualizar el documento: ', error);
  }
};

// Ejemplo de función para eliminar un documento
export const deleteDocument = async (collectionName: string, docId: string) => {
  try {
    await deleteDoc(doc(dbFire, collectionName, docId));
    console.log('Documento eliminado con éxito');
  } catch (error) {
    console.error('Error al eliminar el documento: ', error);
  }
};

