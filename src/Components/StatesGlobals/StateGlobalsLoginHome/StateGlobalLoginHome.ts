import { create } from "zustand";
import DataLogin from "../../Interfaces/InterfacesLoginHome";
import { AuthLoginHome, ProfeAuthData } from "./InterfaceStateGlobalLoginHome";
import {  auth,  onAuthStateChanged,  signInWithEmailAndPassword,  signOut,
} from "../../../firebase/Config/auth";
import {  collection,  dbFire,  getDocs,  query,  where,} from "../../../firebase/Config/firestore";
import {  disableAcount,  errorPassword,  profesorNotFound,} from "../../Principales/HomeLogin/Hooks/LoginErrors/FunctionsErrosLogin";
const stateAuthLogin = create<AuthLoginHome>((set, get) => ({
  profesorAuthData: null,
  adminAuthData: null,
  validationCredentials: false,
  passwordIncorrect: false,
  accountDisable: false,
  profesorNotFound: false,
  //lo inicializo en una funcion, navigateFuncion, es una funcion
  navigate: () => {},
  isAuthLoading: true,
  //funcion para verificar y mantener el auth
  authUser() {
    set({ isAuthLoading: true });
    const { getUserProfile, renderPage } = get();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid } = user;
          const dataUser = await getUserProfile(uid);
          renderPage(dataUser);
          unsubscribe();
        } else set({ isAuthLoading: false });
      } catch (error) {
        console.log(error);
      }
    });
  },
  renderPage(data) {
    set({ validationCredentials: false, isAuthLoading: false });
    const { navigate } = get();
    if (data) {
      const { role } = data;
      return role === "admin"
        ? (navigate("/dashboard-admin"), set({ adminAuthData: data }))
        : (navigate("/dashboard-profesor"), set({ profesorAuthData: data }));
    }
  },
  //Funcion para obtener los datos del use = admin | profesor
  async getUserProfile(uid) {
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
  async loginUser(data: DataLogin) {
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
  async logoutUser() {
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