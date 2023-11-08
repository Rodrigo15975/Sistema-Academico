//Interfaces para todo, sin cursop, con curso, nuevo y repetite
type NewStudent = {
  dni: string;
  apellidos: string;
  nombres: string;
  fechaNacimiento: string;
  sexo: string;
  telefono: string;
  grado: string;
  seccion: string;
  categoria: string;
  fechaMatriculado: string;
  alumnoMatriculado: boolean;
};

interface StateFunctionsNewStudent {
  onSubmitNewStudent: (data: NewStudent, update: () => void) => void;
  updateExistingStudentNew: () => void;
  updateDateToday: (date: string) => void;
  updateSuccesCreatingStudent: () => void;
}
interface StateMainNewStudent extends StateFunctionsNewStudent {
  newStudent: NewStudent;
  date: Date;
  existingStudentNew: boolean;
  valueFechaToday: string;
  successCreatingStudent: boolean;
}
