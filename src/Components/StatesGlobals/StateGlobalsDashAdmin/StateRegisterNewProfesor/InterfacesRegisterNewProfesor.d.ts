type DataDni = {
  dni: string;
};
//Type, para el nuevo profesor, actualizar los datos

interface AsignacionesDataProfesor {
  asignacionesProfesor: {
    curso: string;
    dia: string;
    grado: string;
    horario: string;
    seccion: string;
  }[];
}

//obtención del valores(name) de los inputs, para actualizar los datos
interface SetFieldValueFunction {
  (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ): Promise<void | FormikErrors<initialValuesNewProfesor>> | null;
}
//Propiedades para Fields
type PropsDataField = SetFieldValueFunction | undefined;


//Propiedades para el registro del nuevo profesor
type NewDataProferEmailPassword = {
  apellidos: string;
  dni: string;
  emailNewProfesor: string;
  name: string;
  passwordNewProfesor: string;
  role: string
};
//StatePrincipal
interface VarianState {
  messageErrorFetchDNI: boolean;
  messageError: string;
  registerDataNewProfesor: NewDataProferEmailPassword;
  fieldsSet: PropsDataField;
  asignacionesProfesor: AsignacionesProfesor[];
  btnDisable: boolean
  dataCompleteProfesor:DataCompleteSendDb 
  successProfesor: boolean,
  profesorExisting: boolean,
  loadignCreateProfesor: boolean,
}
//Interfas de funciones con statePrincipal
interface StateNewProfesor extends VarianState {
  createWithDni(
    data: DataDni,
    helpers: { resetForm: () => void }
  ): Promise<void>;
  getValuesFields: (setFields: PropsDataField) => void;
  closeModalMessageError: () => void;
  onSubmitAddAsignaciones : (data:AsignacionesDataProfesor, helpers: { resetForm: () => void })=> void
  createNewProfesor : ()=> void
  updateBtnExitNeWProfesor: ()=> void
  sendDataCompleteProfesor: ()=> Promise <void>
  profesorExistingUpdate : ()=> void
  successProfesorUpdate: ()=>void
}
