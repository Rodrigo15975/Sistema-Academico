import { create } from "zustand";
import DataLogin from "../../Interfaces/InterfacesLoginHome";
import { AuthLoginHome, ProfeAuthData } from "./InterfaceStateGlobalLoginHome";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "../../Config/auth";
import {
  dbFire,
  collection,
  getDocs,
  query,
  where,
} from "../../Config/firestore";
import {
  disableAcount,
  errorPassword,
  profesorNotFound,
} from "../../Hooks/LoginErrors/FunctionsErrosLogin";

const stateAuthLogin = create<AuthLoginHome>((set, get) => ({
  profesorAuthData: null,
  validationCredentials: false,
  passwordIncorrect: false,
  accountDisable: false,
  profesorNotFound: false,
  //lo inicializo en una funcion, navigateFuncion, es una funcion
  navigate: () => {},
  isAuthLoading: true,
  //funcion para verificar y mantener el auth
  authProfesor() {
    set({ isAuthLoading: true });
    const { navigate, getProfesorProfile } = get();
    onAuthStateChanged(auth, async (authProfesor) => {
      if (authProfesor) {
        const dataProfesor = await getProfesorProfile(authProfesor.uid);
        set({ profesorAuthData: dataProfesor, validationCredentials: false }); //Pasar el validation a false, una vez validado
        navigate("/dashboard");
      } else {
        // Si no hay autenticacion, establecer isAuthLoading en false
        set({ isAuthLoading: false });
      }
    });
  },
  //Funcion para obtener los datos del profesor
  async getProfesorProfile(uid) {
    //referencia de la collecionProfesores
    const dbProfes = collection(dbFire, "profesores");
    //query consultara(filtrara) en path/profesor  y mostrara el doc coincidente
    const q = query(dbProfes, where("uid", "==", uid));
    //resultado del query
    const queryData = await getDocs(q);
    //Verificamos si hay docs
    if (queryData.docs.length > 0) {
      const queryFound = queryData.docs[0].data() as ProfeAuthData;
      //Que me retorne la información obtenida del doct
      return queryFound;
    }
    return null;
  },
  //Funcion para ingresar al dashboard
  async loginProfesor(data: DataLogin) {
    set({ validationCredentials: true });
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        if (errorPassword(error)) set({ passwordIncorrect: true });
        if (profesorNotFound(error)) set({ profesorNotFound: true });
        if (disableAcount(error)) set({ accountDisable: true });
      }
      set({ validationCredentials: false });
    }
  },
  async logoutProfesor() {
    const { navigate } = get();
    window.location.reload();
    //Establecer en nulo la informacion del usuario logueado
    await signOut(auth);
    console.log("Exit complete");
    navigate("/");
    return;
  },
  renderNavigate(navigate) {
    set({ navigate });
  },
  //Funciones para cerrar los modales
  closeModalAccountDisable() {
    const { accountDisable } = get();
    set({ accountDisable: !accountDisable });
  },
  //Funciones para cerrar los modales
  closeModalPasswordIncorrect() {
    const { passwordIncorrect } = get();
    set({ passwordIncorrect: !passwordIncorrect });
  },
  //Funciones para cerrar los modales
  closeModalProfesorNotFound() {
    const { profesorNotFound } = get();
    set({ profesorNotFound: !profesorNotFound });
  },
}));

export default stateAuthLogin;
