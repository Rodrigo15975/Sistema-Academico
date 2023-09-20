import DataLogin from "../../Interfaces/InterfacesLoginHome";
import { NavigateFunction } from "react-router-dom";

type ProfeAuthData = {
  readonly uid: string;
  name: string;
  email: string;
  role: string;
  urlPhoto: string;
} | null;

interface LoadingAutentication {
  isAuthLoading: boolean;
  validationCredentials: boolean;
  passwordIncorrect: boolean;
  profesorNotFound: boolean;
  accountDisable: boolean;
}

interface AuthLoginHome extends LoadingAutentication {
  profesorAuthData: ProfeAuthData;
  authProfesor: () => void;
  //Data recibe los datos del login
  loginProfesor: (data: DataLogin) => void;
  logoutProfesor: () => void;
  //Funcion para actualizar el navigate
  renderNavigate: (navigate: NavigateFunction) => void;
  //navigate para usar la api react-router-dom
  navigate: NavigateFunction;
  //Obtener el perfil del profesor
  getProfesorProfile: (uid: string) => Promise<ProfeAuthData | undefined>;
  closeModalPasswordIncorrect: () => void;
  closeModalProfesorNotFound: () => void;
  closeModalAccountDisable: () => void;
}
