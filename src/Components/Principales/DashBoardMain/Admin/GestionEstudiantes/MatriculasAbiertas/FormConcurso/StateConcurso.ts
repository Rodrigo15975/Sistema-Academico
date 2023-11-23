import { create } from "zustand";
import MatriculaOptions from "../../../../../../Enums/MatriculaOptions";
import { validateDNI } from "../FormRepitente/StateRepitente";
import {
  dbFire,
  query,
  where,
  getDocs,
  collection,
} from "../../../../../../../firebase/Config/firestore";
import verifyCategory from "../FormNuevo/StateNuevo/Hooks/HookVerifyCategoryAll";
import { updateStudent } from "../FormNuevo/StateNuevo/Hooks/FunctionsNewStudentCrud";

const stateConcurso = create<StateMainConcurso>((set, get) => ({
  studentConcurso: {
    alumnoMatriculado: false,
    apellidos: "",
    dni: "",
    fechaNacimiento: "",
    fechaMatriculado: "",
    grado: "",
    nombres: "",
    seccion: "",
    sexo: "",
    telefono: "",
    categoria: MatriculaOptions.concurso,
  },
  buttonDisableConcurso: true,
  studentNotFoundConcurso: false,
  studentIsMatriculadoConcurso: false,
  successMatriculadoConcurso: false,
  studentIsMatriculadoUpdateConcurso() {
    set({ studentIsMatriculadoConcurso: false });
  },
  studentMatriculadoSuccesUpdateConcurso() {
    set({ successMatriculadoConcurso: false });
  },
  async onSubmitNewStudent(_, helper) {
    const { studentConcurso } = get();
    const { idDoc, alumnoMatriculado, dni } = studentConcurso;
    try {
      if (alumnoMatriculado)
        return set({ studentIsMatriculadoConcurso: true }), helper();
      else {
        const newDataUpdate = {
          ...studentConcurso,
          alumnoMatriculado: true,
        };
        await updateStudent(idDoc ?? "", newDataUpdate);
        set({ successMatriculadoConcurso: true });
        helper();
        return;
      }
    } catch (error) {
      console.log(`Error al obtener al estudiante: ${error}, ${dni} `);
    }
  },
  async getValueDni(dni, setValuesInputs) {
    try {
      const validationDni = validateDNI(dni);
      const dbCollection = collection(dbFire, "estudiantes");
      const q = query(dbCollection, where("dni", "==", validationDni));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 1) {
        const doc = querySnapshot.docs[0];
        const data = doc.data() as NewStudent;
        const {
          categoria,
          nombres,
          apellidos,
          fechaNacimiento,
          seccion,
          sexo,
          telefono,
          grado,
        } = data;
        const categoryConCurso = verifyCategory(
          categoria,
          MatriculaOptions.concurso
        );
        set({ studentConcurso: data });
        if (categoryConCurso) {
          setValuesInputs("nombres", nombres);
          setValuesInputs("apellidos", apellidos);
          setValuesInputs("fechaNacimiento", fechaNacimiento);
          setValuesInputs("sexo", sexo);
          setValuesInputs("telefono", telefono);
          setValuesInputs("grado", grado);
          setValuesInputs("seccion", seccion);
          return;
        }
      }
      return set({ studentNotFoundConcurso: true });
    } catch (error) {
      console.log(`Error al obtener datos ${error}} del estudiante ${dni}`);
    }
  },

  studentUpdateNotFoundConcurso() {
    const { studentNotFoundConcurso } = get();
    set({ studentNotFoundConcurso: !studentNotFoundConcurso });
  },
  updateNormalBtnDisable() {
    set({ buttonDisableConcurso: true });
  },
}));
export default stateConcurso;
