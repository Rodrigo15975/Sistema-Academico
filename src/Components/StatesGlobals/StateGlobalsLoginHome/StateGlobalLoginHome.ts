import { create } from "zustand";
import DataLogin from "../../Interfaces/InterfacesLoginHome";
import { AuthLoginHome, ProfeAuthData } from "./InterfaceStateGlobalLoginHome";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "../../../firebase/Config/auth";
import {
  collection,
  dbFire,
  getDocs,
  query,
  where,
} from "../../../firebase/Config/firestore";
import {
  disableAcount,
  errorPassword,
  profesorNotFound,
} from "../../Principales/HomeLogin/Hooks/LoginErrors/FunctionsErrosLogin";
import { renderNavigateRole } from "./HooksRenderNavigate";
import Roles from "../../Enums/Roles";
import RutasDeterminadas from "../../Enums/RutasDeterminadas";
const stateAuthLogin = create<AuthLoginHome>((set, get) => ({
  profesorAuthData: null,
  adminAuthData: {
    email: "asd",
    name: "asd",
    role: "asd",
    uid: "asd",
    urlPhoto: "asd",
  },
  validationCredentials: true,
  passwordIncorrect: false,
  accountDisable: false,
  profesorNotFound: false,
  netWorkFailed: false,
  uid: "",
  //lo inicializo en una funcion, navigateFuncion, es una funcion
  navigate: () => {},
  isAuthLoading: false,
  //funcion para verificar y mantener el auth
  authUser() {
    set({ isAuthLoading: false });
    const { getUserProfile, renderPage } = get();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid } = user;
          set({ uid });
          const dataUser = await getUserProfile(uid);
          renderPage(dataUser);
          unsubscribe();
          set({ isAuthLoading: false });
        } else set({ isAuthLoading: false });
      } catch (error) {
        console.log(error);
        set({ isAuthLoading: false });
      }
    });
  },
  renderPage(data) {
    set({ validationCredentials: false, isAuthLoading: false });
    const { navigate } = get();
    if (data) {
      const { role } = data;
      const renderRole = renderNavigateRole({ navigate, role });
      if (renderRole === Roles.administrador)
        return navigate(RutasDeterminadas.admin), set({ adminAuthData: data });
      else if (renderRole === Roles.profesor)
        return (
          navigate(RutasDeterminadas.profesor), set({ profesorAuthData: data })
        );
      else null;
    }
  },
  //Funcion para obtener los datos del use = admin | profesor
  async getUserProfile(uid) {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },
  //Funcion para ingresar al dashboard
  async loginUser(data: DataLogin, { resetForm }) {
    set({ validationCredentials: true });
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      resetForm();
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
    //Establecer en nulo la informacion del usuario logueado
    await signOut(auth);
    location.replace("/");
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
