import Roles from "../../../../../Enums/Roles";
import { yup } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";

const initialValuesGestionAdmin: ValuesRegisterGestionAdmin = {
  apellidos: "",
  correo: "",
  dni: "",
  nombres: "",
  password: "",
  role: Roles.administrador
};

const validationSchemaGestionAdmins = yup.object().shape({
  dni: yup.string()
    .required("DNI es obligatorio")
    .matches(
      /^(?!0{8})[0-9]{8}$/,
      "DNI debe contener 8 dígitos numéricos y no puede ser todo ceros"
    ),
  nombres: yup.string().required("Los nombres son obligatorios"),
  apellidos: yup.string().required("Los apellidos son obligatorios"),
  correo: yup
    .string()
    .email("Ingrese un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria"),
});

export { validationSchemaGestionAdmins, initialValuesGestionAdmin };
