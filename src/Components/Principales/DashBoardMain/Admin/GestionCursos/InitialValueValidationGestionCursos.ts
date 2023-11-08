import { yup } from "../../../../ImportsDeterminadas/ImportsDeterminadas";

const initialValueCursos: InitialCursosData = {
  nuevosCursos: [
    {
      entorno: "",
      horas: "",
      name: ""
    }
  ]
}


const validationSchemaGestionCursos = yup.object().shape({
  nuevosCursos: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .matches(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]+$/, 'Ingrese solo texto en el nombre del curso')
        .required('El nombre del curso es obligatorio'),
      entorno: yup.string().required('Seleccione un entorno'),
      horas: yup.string().required('Seleccione un número de horas'),
    })
  ),
});

const initialValueCursosUpdate: InitialNewCursos = {
  entorno: "",
  horas: "",
  name: ""
}


const validationSchemaGestionCursosUpdate = yup.object().shape({
  name: yup.string().matches(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]+$/, 'Ingrese solo texto en el nombre del curso')
    .required('El nombre del curso es obligatorio'),
  entorno: yup.string().required('Seleccione un entorno'),
  horas: yup.string().required('Seleccione un número de horas'),
});







export { initialValueCursos, validationSchemaGestionCursos, initialValueCursosUpdate, validationSchemaGestionCursosUpdate }