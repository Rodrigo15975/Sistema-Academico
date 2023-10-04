type DataDni = {
  dni: string;
};
//Type, para el nuevo profesor, actualizar los datos

//obtención del valores(name) de los inputs, para actualizar los datos
interface SetFieldValueFunction {
  (
    field: string,
    value: string ,
    shouldValidate?: boolean | undefined
  ): Promise<void | FormikErrors<initialValuesNewProfesor>> | null;
}
//Propiedades para Fields
type PropsDataField = SetFieldValueFunction | undefined;

//StatePrincipal
interface VarianState {
  messageErrorFetchDNI: boolean;
  messageError: string;
  registerDataNewProfesor: {
    emailNewProfesor: string,
    passwordNewProfesor: string,
    name: string | undefined,
    apellidos: string
    dni: string | undefined
  }
  fieldsSet: PropsDataField;
  btnDisabled: boolean
}
//Interfas de funciones con statePrincipal
interface StateNewProfesor extends VarianState {
  createWithDni(
    data: DataDni,
    helpers: { resetForm: () => void }
  ): Promise<void>;
  createNewProfesor: () => void;
  getValuesFields: (setFields: PropsDataField) => void;
  closeModalMessageError: () => void;
  buttonDisabled: ()=> void
  prueba: ()=> void
}
