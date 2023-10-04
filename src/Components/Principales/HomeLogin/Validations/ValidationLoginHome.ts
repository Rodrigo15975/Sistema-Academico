import { yup } from "../../../ImportsDeterminadas/ImportsDeterminadas";
//EMAIL
// debe comenzar con uno o mas caracteres alfabeticos
//  (mayusculas o minusculas), 
// digitos (0-9), o ciertos caracteres especiales como ".", "_", "%", "+", o "-".
// luego, debe contener el símbolo "@".
// despues del simbolo "@", puede contener uno o mas caracteres alfaebticos, digitos o ciertos caracteres 
// especiales, seguidos por un punto ".".
// al final, debe tener al menos dos caracteres alfabeticos después del ultimo punto ".".
//PASSWORD
// Al menos una letra minúscula.
// Al menos una letra mayúscula.
// Al menos un dígito (pero no más de 10 dígitos).
// Una longitud mínima de 6 caracteres.
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
