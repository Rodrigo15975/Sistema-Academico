import { create } from "zustand";
import {
  ResponseGetDataFetchDni,
  getFetchDNI,
} from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/Hooks/HookFechaDNI";
import {
  generatorEmailAdminGestion,
  generatorPasswordAdminGestion,
} from "./GeneratorDataGestionAdmin";
import { profesorExisting } from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/Hooks/ErrorsCreatingProfesor";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../../../firebase/Config/auth";
import {
  addDoc,
  collection,
  dbFire,
} from "../../../../../../firebase/Config/firestore";
import Roles from "../../../../../Enums/Roles";

const stateGestionAdmins = create<MainStateGestionAdmins>((set, get) => ({
  addAdmins: false,
  btnDisabledForm: true,
  propsDni: "",
  adminExisting: false,
  dataValueRegisterAdmin: {
    apellidos: "",
    correo: "",
    dni: "",
    nombres: "",
    password: "",
    role: Roles.administrador,
  },
  successCreatingAdmin: false,
  async createCredentialsAdmin(data, helper) {
    const { sendCredentialDB } = get();
    try {
      const { correo, password } = data;
      const newAdmin = await createUserWithEmailAndPassword(
        auth,
        correo,
        password
      );
      if (newAdmin) {
        const uid = newAdmin.user.uid;
        // pasalos los datos y el uid, para envialo ala base de datos yel helper, para resetear el form
        sendCredentialDB(data, uid, helper);
        set({ successCreatingAdmin: true })
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        if (profesorExisting(error))
          return set({ adminExisting: true }), helper();
      }
      console.log(error);
      return;
    }
  },
  succesCreatingAdminUpdate() {
    set({ successCreatingAdmin: false })
  },
  // Envia a la base de datos
  async sendCredentialDB(data, uid, helper) {
    try {
      const dataCompleteWithUID = {
        ...data,
        uid,
      };
      const refDb = collection(dbFire, "/profesores");
      await addDoc(refDb, dataCompleteWithUID);
      helper();
      return;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message, "al registrar al admin al firestore");
      }
      console.log(error);
      return;
    }
  },
  async onSubmitRegisterGestionAdmin(data, resetForm) {
    const { correo, password } = data;
    const { createCredentialsAdmin } = get();
    const mayusculaData = {
      ...data,
      correo: correo.toLocaleUpperCase(),
      password: password.toLocaleUpperCase(),
    };
    // pasalos los datos  para envialo ala base de datos y el helper, para resetear el form
    await createCredentialsAdmin(mayusculaData, resetForm);
    return;
  },
  setAddAdmins() {
    const { addAdmins } = get();
    set({ addAdmins: !addAdmins });
    return;
  },
  setUpdateBtnDisabledForm() {
    const { btnDisabledForm } = get();
    set({ btnDisabledForm: !btnDisabledForm });
  },
  setUpdateAdminExisting() {
    const { adminExisting } = get();
    set({ adminExisting: !adminExisting });
  },
  async getValueDniGestionAdmin(dni, setInputs) {
    const { setUpdateBtnDisabledForm } = get();
    try {
      const { setFields } = setInputs;
      const { message, data } = (await getFetchDNI(
        dni
      )) as ResponseGetDataFetchDni;
      if (data) {
        const email = generatorEmailAdminGestion(data);
        const password = generatorPasswordAdminGestion(data);
        if (email && password) {
          const { apellidoMaterno, apellidoPaterno, nombres } = data;
          const dataComplete = {
            email,
            password,
            apellidos: `${apellidoPaterno} ${apellidoMaterno}`,
            nombres,
          };
          setFields("nombres", dataComplete.nombres);
          setFields("password", dataComplete.password);
          setFields("correo", dataComplete.email);
          setFields("apellidos", dataComplete.apellidos);
          set({ btnDisabledForm: false });
          setUpdateBtnDisabledForm();
          return;
        }
        return;
      }
      if (message) {
        console.log(message);
        return;
      }
    } catch (error) {
      console.log(`error al obtener el dni ${error}`);
    }
  },
}));

export default stateGestionAdmins;
