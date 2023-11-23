interface FunctionsRepitente {
  onSubmitStudentRepitente: (
    data: NewStudent,
    helperFormik: () => void
  ) => void;
  updateBtnDisableRepitente: () => void;
  getDataForDni: (dni: string, setValues: UpdateInputs) => Promise<void>;
  studentUpdateNotFound: () => void;
  updateNormalBtnDisable: () => void;
  studentIsMatriculadoUpdate: () => void;
  studentMatriculadoSuccesUpdate: () => void;
}

//Se le pasa sin una nombre de la propiedad, directamente, para acceder al valor
//tipo funcion
interface UpdateInputs {
  (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ): Promise<void | FormikErrors<NewStudent>>;
}

interface NewStudentRepitente {
  apellidos: string;
  categoria: string;
  dni: string;
  fechaMatriculado: string;
  fechaNacimiento: string;
  grado: string;
  nombres: string;
  seccion: string;
  sexo: string;
  idDoc: string;
  telefono: string;
  alumnoMatriculado: boolean | null;
}

interface MainStateRepitente extends FunctionsRepitente {
  newStudentRepitente: NewStudentRepitente;
  buttonDisableRepitente: boolean;
  studentNotFound: boolean;
  studentIsMatriculado: boolean;
  successMatriculado: boolean;
}
