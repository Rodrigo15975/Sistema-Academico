import DataLogin from "../../Interfaces/InterfacesLoginHome";
import { NavigateFunction } from "react-router-dom";
//Mismo informacion para el profesor y administrador
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
  netWorkFailed: boolean
}

interface AuthLoginHome extends LoadingAutentication {
  profesorAuthData: ProfeAuthData;
  adminAuthData: ProfeAuthData;
  authUser: () => void;
  //Data recibe los datos del login
  loginUser: (data: DataLogin, {resetForm}:{resetForm: ()=> void}) => void;
  logoutUser: () => void;
  //Funcion para actualizar el navigate
  renderNavigate: (navigate: NavigateFunction) => void;
  //navigate para usar la api react-router-dom
  navigate: NavigateFunction;
  //Recibira los datos dependiendo del role y renderizara
  renderPage: (data: ProfeAuthData | undefined) => void;
  //Obtener el perfil del profesor
  getUserProfile: (uid: string) => Promise<ProfeAuthData | undefined>;
  closeModalPasswordIncorrect: () => void;
  closeModalProfesorNotFound: () => void;
  closeModalAccountDisable: () => void;

}
