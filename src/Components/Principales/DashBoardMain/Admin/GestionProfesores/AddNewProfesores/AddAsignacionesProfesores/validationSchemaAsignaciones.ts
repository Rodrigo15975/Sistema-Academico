import { yup } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";
export const validationSchemaAsignaciones = yup.object().shape({
  seccion: yup.string().required("La sección es requerida"),
  curso: yup.string().required("El curso es requerido"),
  dia: yup.string().required("El día es requerido"),
  grado: yup.string().required("EL grado es requerido"),
  horario: yup.string().required("El horario es requerido"),
});
