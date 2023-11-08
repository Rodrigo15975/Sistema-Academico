import MatriculaOptions from "../../../../../../Enums/MatriculaOptions";
import { yup } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";

const initialValueNewStudentConcurso: NewStudent = {
  apellidos: "",
  dni: "",
  nombres: "",
  fechaNacimiento: "",
  sexo: "",
  telefono: "",
  grado: "",
  fechaMatriculado: "",
  seccion: "",
  categoria: MatriculaOptions.concurso,
  alumnoMatriculado:false
};

// Función para calcular la edad a partir de una fecha de nacimiento
function calculateAge(birthDate: Date) {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }
  return age;
}

const validationSchemaNewStudentConcurso = yup.object().shape({
  dni: yup
    .string()
    .required("DNI es obligatorio")
    .matches(/^[0-9]{8}$/, "DNI debe contener 8 dígitos numéricos"),
  nombres: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Nombres deben contener solo letras y espacios")
    .required("Nombres son obligatorios"),
  apellidos: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Apellidos deben contener solo letras y espacios")
    .required("Apellidos son obligatorios"),
  sexo: yup.string().required("Sexo es obligatorio"),
  grado: yup.string().required("Grado es obligatorio"),
  seccion: yup.string().required("Seccion es obligatorio"),
  fechaNacimiento: yup
    .date()
    .required("Fecha de nacimiento es obligatoria")
    .test(
      "age-range",
      "La edad debe estar entre 11 y 20 años",
      function (value) {
        const age = calculateAge(value);
        return age >= 11 && age <= 20;
      }
    ),
});

export { validationSchemaNewStudentConcurso, initialValueNewStudentConcurso };
