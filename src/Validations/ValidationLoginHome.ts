import * as yup from "yup";

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Ingrese una dirección de correo electrónico válida"
    )
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{1,10}).{6,}$/,
      "Ingrese correctamente su contraseña"
    )
    .required("La contraseña es obligatoria"),
});
