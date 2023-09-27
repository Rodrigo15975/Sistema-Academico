import * as Yup from "yup";
export const initialValuesNewProfesor = {
  nombre: "",
  apellido: "",
};

export const validationNewProfesor = Yup.object({
  nombre: Yup.string().required("El Nombre es requerido"),
  apellido: Yup.string().required("El Apellido es requerido"),
});
