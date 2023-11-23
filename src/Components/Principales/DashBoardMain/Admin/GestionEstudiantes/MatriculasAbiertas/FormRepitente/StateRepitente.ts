import { create } from "zustand";
import {
  dbFire,
  query,
  where,
  getDocs,
  collection,
} from "../../../../../../../firebase/Config/firestore";
import verifyCategory from "../FormNuevo/StateNuevo/Hooks/HookVerifyCategoryAll";
import MatriculaOptions from "../../../../../../Enums/MatriculaOptions";
import { updateStudent } from "../FormNuevo/StateNuevo/Hooks/FunctionsNewStudentCrud";
export function validateDNI(dni: string) {
  // Verificar si el DNI tiene exactamente 8 dígitos, no es igual a "00000000",
  // y no contiene caracteres no numéricos
  if (/^\d{8}$/.test(dni) && dni !== "00000000" && /^\d+$/.test(dni))
    return dni; // El DNI es válido
  return false; // El DNI no es válido
}

const stateRepitente = create<MainStateRepitente>((set, get) => ({
  newStudentRepitente: {
    apellidos: "",
    categoria: "",
    dni: "",
    fechaMatriculado: "",
    fechaNacimiento: "",
    grado: "",
    nombres: "",
    seccion: "",
    sexo: "",
    idDoc: "",
    telefono: "",
    alumnoMatriculado: null,
  },
  studentIsMatriculado: false,
  successMatriculado: false,
  studentMatriculadoSuccesUpdate() {
    set({ successMatriculado: false });
  },
  studentIsMatriculadoUpdate() {
    set({ studentIsMatriculado: false });
  },
  buttonDisableRepitente: true,
  studentNotFound: false,
  onSubmitStudentRepitente: async (data, resetForm) => {
    const { newStudentRepitente } = get();
    const { idDoc } = data;
    const { alumnoMatriculado } = newStudentRepitente;

    if (alumnoMatriculado)
      return set({ studentIsMatriculado: true }), resetForm();
    else {
      const newDataUpdate = {
        ...data,
        alumnoMatriculado: true,
      };
      await updateStudent(idDoc ?? "", newDataUpdate);
      set({ successMatriculado: true });
      resetForm();
      return;
    }
  },
  async getDataForDni(dni, updateInputs) {
    const { updateBtnDisableRepitente } = get();
    try {
      const validationDni = validateDNI(dni);
      const dbCollection = collection(dbFire, "estudiantes");
      const q = query(dbCollection, where("dni", "==", validationDni));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 1) {
        const doc = querySnapshot.docs[0];
        const matchingStudent = {
          ...doc.data(),
          idDoc: doc.id,
        } as NewStudentRepitente;
        const {
          apellidos,
          fechaNacimiento,
          nombres,
          seccion,
          sexo,
          grado,
          telefono,
          categoria,
          idDoc,
          fechaMatriculado,
        } = matchingStudent;

        const categoryRepitente = verifyCategory(
          categoria,
          MatriculaOptions.repitente
        );
        set({ newStudentRepitente: matchingStudent });
        if (categoryRepitente) {
          updateInputs("apellidos", apellidos);
          updateInputs("fechaNacimiento", fechaNacimiento);
          updateInputs("fechaMatriculado", fechaMatriculado);
          updateInputs("idDoc", idDoc ?? "");
          updateInputs("nombres", nombres);
          updateInputs("seccion", seccion);
          updateInputs("sexo", sexo);
          updateInputs("grado", grado);
          updateInputs("telefono", telefono);
          updateBtnDisableRepitente();
          return;
        }
      }
      return set({ studentNotFound: true });
    } catch (error) {
      console.log(`Error al obtener datos ${error}}`);
    }
  },
  studentUpdateNotFound() {
    const { studentNotFound } = get();
    set({ studentNotFound: !studentNotFound });
  },
  updateBtnDisableRepitente() {
    set({ buttonDisableRepitente: false });
  },
  updateNormalBtnDisable: () => {
    set({ buttonDisableRepitente: true });
  },
}));

export default stateRepitente;
