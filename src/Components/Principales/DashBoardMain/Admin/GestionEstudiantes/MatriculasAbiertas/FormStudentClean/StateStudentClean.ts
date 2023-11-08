import { create } from "zustand";
import MatriculaOptions from "../../../../../../Enums/MatriculaOptions";
import {
  dbFire,
  query,
  where,
  getDocs,
  collection,
} from "../../../../../../../firebase/Config/firestore";
import verifyCategory from "../FormNuevo/StateNuevo/Hooks/HookVerifyCategoryAll";
import { validateDNI } from "../FormRepitente/StateRepitente";

const stateStudentClean = create<StateMainStudentClean>((set, get) => ({
  studeClean: {
    apellidos: "",
    dni: "",
    fechaNacimiento: "",
    grado: "",
    nombres: "",
    seccion: "",
    sexo: "",
    alumnoMatriculado: false,
    telefono: "",
    fechaMatriculado: "",
    categoria: MatriculaOptions.limpio,
  },
  buttonDisableClean: true,
  studentNotFoundClean: false,
  async onSubmitNewStudentClean(data, helper) {
    const { dni } = data;
    try {
      console.log();
      helper();
    } catch (error) {
      console.log(`Error al obtener al estudiante: ${error}, ${dni} `);
    }
  },
  async getValueDniClean(dni, setValuesInputs) {
    try {
      const validationDni = validateDNI(dni);
      const dbCollection = collection(dbFire, "estudiantes");
      const q = query(dbCollection, where("dni", "==", validationDni));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 1) {
        const doc = querySnapshot.docs[0];
        const data = doc.data() as NewStudent;
        const { categoria, nombres, apellidos, fechaNacimiento, seccion, sexo, telefono, grado } = data;
        const categoryLimpio = verifyCategory(
          categoria,
          MatriculaOptions.limpio
        );
        if (categoryLimpio) {
          setValuesInputs("nombres", nombres)
          setValuesInputs("apellidos", apellidos)
          setValuesInputs("fechaNacimiento", fechaNacimiento)
          setValuesInputs("sexo", sexo)
          setValuesInputs("telefono", telefono)
          setValuesInputs("grado", grado)
          setValuesInputs("seccion", seccion)
          return
        }
      }
      return set({ studentNotFoundClean: true })
    } catch (error) {
      console.log(`Error al obtener datos ${error}} del estudiante ${dni}`);
    }
  },
  studentUpdateNotFoundClean() {
    const { studentNotFoundClean } = get();
    set({ studentNotFoundClean: !studentNotFoundClean });
  },
  updateNormalBtnDisableClean() {
    set({ buttonDisableClean: true });
  },
}));
export default stateStudentClean;
