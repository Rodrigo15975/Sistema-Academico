import { yup } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";

export interface AsignacionesDataProfesor {
  asignacionesProfesor: {
    curso: string;
    dia: string;
    grado: string;
    horario: string;
    seccion: string;
  }[];
}

export const initialValuesAsignaciones: AsignacionesDataProfesor = {
  asignacionesProfesor: [
    {
      curso: "",
      dia: "",
      horario: "",
      seccion: "",
      grado: "",
    },
  ],
};

export const validationSchemaAsignaciones = yup.object().shape({
  asignacionesProfesor: yup.array().of(
    yup.object().shape({
      curso: yup.string().required('Selecciona las asignaciones'),
      dia: yup.string().required('Selecciona las asignaciones'),
      grado: yup.string().required('Selecciona las asignaciones'),
      horario: yup.string().required('Selecciona las asignaciones'),
      seccion: yup.string().required('Selecciona las asignaciones'),
    })
  ),
});
