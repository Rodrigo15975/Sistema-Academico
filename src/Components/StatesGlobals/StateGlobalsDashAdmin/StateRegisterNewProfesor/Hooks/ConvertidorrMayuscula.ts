
interface Asignacion {
  curso: string;
  dia: string;
  grado: string;
  horario: string;
  seccion: string;
}
interface DataCompleteProfesor { 
  role: string
  apellidos: string;
  asignaciones: Asignacion[];
  dni: string;
  emailNewProfesor: string;
  name: string;
  passwordNewProfesor: string;
}
export function convertirAMayusculas(obj: DataCompleteProfesor): DataCompleteProfesor {
  const convertedObj: DataCompleteProfesor = {
    ...obj,
    apellidos: obj.apellidos.toUpperCase(),
    asignaciones: obj.asignaciones.map(asignacion => ({
      curso: asignacion.curso.toUpperCase(),
      dia: asignacion.dia.toUpperCase(),
      grado: asignacion.grado.toUpperCase(),
      horario: asignacion.horario.toUpperCase(),
      seccion: asignacion.seccion.toUpperCase(),
    })),
    dni: obj.dni.toUpperCase(),
    emailNewProfesor: obj.emailNewProfesor.toUpperCase(),
    name: obj.name.toUpperCase(),
    passwordNewProfesor: obj.passwordNewProfesor.toUpperCase(),
  };

  return convertedObj;
}

