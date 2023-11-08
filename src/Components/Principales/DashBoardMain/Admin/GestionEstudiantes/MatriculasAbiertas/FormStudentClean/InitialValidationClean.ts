import MatriculaOptions from "../../../../../../Enums/MatriculaOptions";
import { yup } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";

const initialValueNewStudentClean: NewStudent = {
  apellidos: "",
  dni: "",
  nombres: "",
  fechaNacimiento: "",
  sexo: "",
  telefono: "",
  grado: "",
  fechaMatriculado:"",
  seccion: "",
  alumnoMatriculado:false,
  categoria: MatriculaOptions.limpio,
};

const validationSchemaNewStudentClean = yup.object().shape({
  dni: yup
    .string()
    .required("DNI es obligatorio")
    .matches(/^[0-9]{8}$/, "DNI debe contener 8 dígitos numéricos"),
  nombres: yup.string().required("Nombres son obligatorios"),
  apellidos: yup.string().required("Apellidos son obligatorios"),
  fechaNacimiento: yup.date().required("Fecha de nacimiento es obligatoria"),
  sexo: yup.string().required("Sexo es obligatorio"),
  grado: yup.string().required("Grado es obligatorio"),
  seccion: yup.string().required("Seccion es obligatorio"),
  telefono: yup
    .string()
    .required("Teléfono de contacto es obligatorio")
    .matches(/^[0-9]{9}$/, "Teléfono debe contener 9 dígitos numéricos"),
});

export { validationSchemaNewStudentClean, initialValueNewStudentClean };
