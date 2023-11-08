import MatriculaOptions from "../../../../../../Enums/MatriculaOptions";
import { yup } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";

const initialValueNewStudent: NewStudent = {
  apellidos: "",
  dni: "",
  nombres: "",
  fechaNacimiento: "",
  sexo: "",
  telefono: "",
  grado: "",
  seccion: "",
  fechaMatriculado:"",
  alumnoMatriculado:false,
  categoria:MatriculaOptions.nuevo
};
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

const validationSchemaNewStudent = yup.object().shape({
  dni: yup
    .string()
    .required("DNI es obligatorio")
    .matches(/^[0-9]{8}$/, "DNI debe contener 8 dígitos numéricos"),
  nombres: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Nombres deben contener solo letras y espacios")
    .min(4, "Nombres deben tener al menos 4 letras")
    .required("Nombres son obligatorios"),
  apellidos: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, "Apellidos deben contener solo letras y espacios")
    .min(4, "Apellidos deben tener al menos 4 letras")
    .required("Apellidos son obligatorios"),
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
  sexo: yup.string().required("Sexo es obligatorio"),
  grado: yup.string().required("Grado es obligatorio"),
  seccion: yup.string().required("Seccion es obligatorio"),
  telefono: yup
    .string()
    .required("Teléfono de contacto es obligatorio")
    .matches(/^[0-9]{9}$/, "Teléfono debe contener 9 dígitos numéricos"),
});

export { validationSchemaNewStudent, initialValueNewStudent };
