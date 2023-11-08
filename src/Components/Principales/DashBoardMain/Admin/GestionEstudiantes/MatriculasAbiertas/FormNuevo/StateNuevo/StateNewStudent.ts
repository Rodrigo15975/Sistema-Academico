import { create } from "zustand";
import MatriculaOptions from "../../../../../../../Enums/MatriculaOptions";
import { addStudent, existingStudent } from "./Hooks/FunctionsNewStudentCrud";

const stateNewStudent = create<StateMainNewStudent>((set, get) => ({
  newStudent: {
    apellidos: "",
    dni: "",
    fechaNacimiento: "",
    nombres: "",
    alumnoMatriculado: false,
    sexo: "",
    telefono: "",
    grado: "",
    seccion: "",
    fechaMatriculado: "",
    categoria: MatriculaOptions.nuevo,
  },
  date: new Date(),
  valueFechaToday: "",
  existingStudentNew: false,
  successCreatingStudent: false,
  async onSubmitNewStudent(data, helperFormik) {
    const { valueFechaToday } = get();
    const { dni } = data;
    const dataMayuscula = {
      ...data,
      alumnoMatriculado: true,
      apellidos: data.apellidos.toLocaleUpperCase(),
      nombres: data.nombres.toLocaleUpperCase(),
      fechaMatriculado: valueFechaToday,
    };
    try {
      const student = await existingStudent(dni);
      if (student) return set({ existingStudentNew: true });
      await addStudent(dataMayuscula);
      helperFormik();
      set({ successCreatingStudent: true });
      return;
    } catch (error) {
      console.log(`error al añadir ${error}`);
    }
  },
  updateSuccesCreatingStudent() {
    const { successCreatingStudent } = get();
    set({ successCreatingStudent: !successCreatingStudent });
  },
  updateExistingStudentNew() {
    const { existingStudentNew } = get();
    set({ existingStudentNew: !existingStudentNew });
  },
  updateDateToday(valueDate) {
    set({ valueFechaToday: valueDate });
  },
}));

export default stateNewStudent;
