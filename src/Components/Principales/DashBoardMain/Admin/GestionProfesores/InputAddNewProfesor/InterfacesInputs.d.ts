export interface PropsInputsAddNewProfesor {
  // Función que devuelve propiedades específicas del campo según su name( tipo indentificador)
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  touched: { [key: string]: boolean }; // Objeto que almacena información sobre si un campo ha sido tocado (enfocado)
  errors: { [key: string]: string }; // Objeto que almacena mensajes de error para los campos
  label?: string; // Texto que se utilizará como etiqueta para el input
  type: string; // Tipo de input, por ejemplo, "text", "password", etc
  name: string; // Nombre único del input.
  className?: string; // Clase CSS que se puede aplicar al input para estilizarlo
  textPlaceHolder: string;
  disabled?: boolean;
 
}
