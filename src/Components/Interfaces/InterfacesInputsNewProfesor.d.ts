//Interfaces para los inputs de agregar nuevos profesores
interface PropsUserNewProfesor {
  // Función que devuelve propiedades específicas del campo según su name( tipo indentificador)
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  touched: { [key: string]: boolean }; // Objeto que almacena información sobre si un campo ha sido tocado (enfocado)
  errors: { [key: string]: string }; // Objeto que almacena mensajes de error para los campos
}
//Herada solo para un input, y actualizarlo con setFields
interface PropsSetNewProfesor extends PropsUserNewProfesor {
  setFields: {
    (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ): Promise<void | FormikErrors<initialValuesNewProfesor>>;
  };
}

//Type para initialValues
type initialValuesNewProfesor = {
  email: string;
  password: string;
  name: string;
  apellidos: string;
};
