import { yup } from "../../../../../../../ImportsDeterminadas/ImportsDeterminadas";
type InitialValue = {
  curso: string;
  horario: string;
  dia: string;
  grado: string;
  seccion: string;
};
const initialValueFormEdit: InitialValue = {
  curso: "",
  dia: "",
  grado: "",
  horario: "",
  seccion: "",
};

const initialValueSchemaFormEdit = yup.object().shape({
  curso: yup
    .string()
    .oneOf(
      ["", "Comunicación", "Matemática", "Física", "Educación Física"],
      "Selecciona un curso válido"
    )
    .required('El campo "curso" es obligatorio'),
  dia: yup
    .string()
    .oneOf(
      ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
      "Selecciona un día válido"
    )
    .required('El campo "dia" es obligatorio'),
  grado: yup
    .string()
    .oneOf(["", "1", "2", "3", "4", "5"], "Selecciona un grado válido")
    .required('El campo "grado" es obligatorio'),
  horario: yup
    .string()
    .oneOf(
      [
        "",
        "7:45AM:9:45AM",
        "9:45AM:10:45AM",
        "10:45AM:11:45AM",
        "11:45AM:1:45PM",
      ],
      "Selecciona un horario válido"
    )
    .required('El campo "horario" es obligatorio'),
  seccion: yup
    .string()
    .oneOf(["", "A", "B", "C", "D"], "Selecciona una sección válida")
    .required('El campo "seccion" es obligatorio'),
});
export { initialValueFormEdit, initialValueSchemaFormEdit };
