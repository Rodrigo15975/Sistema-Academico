// Value Initial Form Gestion
type ValuesRegisterGestionAdmin = {
  dni: string;
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  role: string;
};

type UpdateInputsGestion = {
  setFields(
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ): Promise<void | FormikErrors<ValuesRegisterGestionAdmin>>;
};

interface FunctionsGestionAdmins {
  setAddAdmins: () => void;
  setUpdateBtnDisabledForm: () => void;
  getValueDniGestionAdmin: (    dni: string,    setInputs: UpdateInputsGestion  ) => Promise<void>; 
  onSubmitRegisterGestionAdmin: (    data: ValuesRegisterGestionAdmin,  helper: () => void ) => void;
  createCredentialsAdmin: (data: ValuesRegisterGestionAdmin,helper: () => void) => Promise<void>;
  sendCredentialDB: (data:ValuesRegisterGestionAdmin,uid:string,helper: () => void) => Promise<void>;
  setUpdateAdminExisting: ()=> void
  succesCreatingAdminUpdate: ()=> void
}

interface MainStateGestionAdmins extends FunctionsGestionAdmins {
  propsDni: string;
  addAdmins: boolean;
  btnDisabledForm;
  dataValueRegisterAdmin: ValuesRegisterGestionAdmin;
  adminExisting: boolean
  successCreatingAdmin: boolean
}
