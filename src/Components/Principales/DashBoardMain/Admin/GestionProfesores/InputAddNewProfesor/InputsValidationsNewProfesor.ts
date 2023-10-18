import { yup } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
export const inputsValidationsNewProfesor = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Correo eletrónico inválido"
    )
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{1,10}).{6,}$/,
      "Ingrese contraseña válida"
    )
    .required("Contraseña requerida"),
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "El nombre es inválido")
    .required("El nombre es obligatorio"),

  apellidos: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "El apellido es inválido"
    )
    .required("El apellido es obligatorio"),
});

export const inputValidationDni = yup.object().shape({
  dni: yup
    .string()
    .matches(/^[1-9][0-9]{7}$/, 'DNI Inválido.')
    .required('DNI requerido.'),
});
