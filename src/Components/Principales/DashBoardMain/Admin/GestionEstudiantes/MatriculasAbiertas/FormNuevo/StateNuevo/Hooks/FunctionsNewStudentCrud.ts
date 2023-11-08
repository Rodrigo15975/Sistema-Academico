import {
  addDoc,
  collection,
  dbFire,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "../../../../../../../../../firebase/Config/firestore";

// Función para actualizar un estudiante en Firestore
const updateStudent = async (studentId: string, newData: NewStudent) => {
  const studentRef = doc(dbFire, "estudiantes", studentId);
  try {
    await updateDoc(studentRef, newData);
    console.log("Estudiante actualizado con éxito");
  } catch (error) {
    console.error("Error al actualizar el estudiante: ", error);
  }
};

const existingStudent = async (dni: string) => {
  try {
    const studentCollection = collection(dbFire, "estudiantes");
    const q = query(studentCollection, where("dni", "==", dni));
    const consulta = await getDocs(q);
    if (consulta.size > 0) return true;
    else return false;
  } catch (error) {
    console.log(`ERROR, AL VERIFICAR AL ESTUDIANTE, ${error},${dni}`);
  }
};

const addStudent = async (data: NewStudent) => {
  try {
    const docRef = await addDoc(collection(dbFire, "estudiantes"), data);
    console.log("Estudiante creado con ID: ", docRef.id);
  } catch (error) {
    console.log(`Erro al añadir al nuevo estudiante: ,${error}`);
  }
};

// Función para eliminar un estudiante en Firestore
const deleteStudent = async (studentId: string) => {
  const studentRef = doc(dbFire, "estudiantes", studentId);
  try {
    await deleteDoc(studentRef);
    console.log("Estudiante eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar el estudiante: ", error);
  }
};

export { updateStudent, deleteStudent, addStudent, existingStudent };
