interface FunctionsRepitente {
  onSubmitStudentRepitente: (
    data: NewStudent,
    helperFormik: () => void
  ) => void;
  updateBtnDisableRepitente: () => void;
  getDataForDni: (dni: string, setValues: UpdateInputs) => Promise <void>;
  studentUpdateNotFound: ()=> void
  updateNormalBtnDisable: ()=> void
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

interface MainStateRepitente extends FunctionsRepitente {
  newStudentRepitente: NewStudent;
  buttonDisableRepitente: boolean;
  studentNotFound: boolean
  
}
