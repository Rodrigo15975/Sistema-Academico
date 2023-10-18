//Asignaciones
type AsignacionesProfesor = {
  horario: string;
  curso: string;
  dia: string;
  grado: string;
  seccion: string;
};

interface DataCompleteSendDb {
  apellidos: string;
  dni: string;
  emailNewProfesor: string;
  name: string;
  role: string;
  passwordNewProfesor: string;
  asignaciones: AsignacionesProfesor[];
}
