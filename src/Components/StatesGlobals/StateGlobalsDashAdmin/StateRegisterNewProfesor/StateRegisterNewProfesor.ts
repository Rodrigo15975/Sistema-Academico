import { create } from "zustand";
import { ResponseGetDataFetchDni, getFetchDNI } from "./Hooks/HookFechaDNI";
import { MessageErrorsFetchs } from "./Enums/MessageErrorsFetch";
import {  generatorEmail,  generatorPassword,} from "./Hooks/GeneratorDatosNewProfesor";
// import {  collection,  dbFire,  addDoc,} from "../../../../firebase/Config/firestore";
import Roles from "../../../Enums/Roles";
import { convertirAMayusculas } from "./Hooks/ConvertidorrMayuscula";
import { createCredentialsProfesor, sendDataDbFirestore } from "./Hooks/CreateCredentialsProfesor";
const stateRegisterNewProfesor = create<StateNewProfesor>((set, get) => ({
  messageErrorFetchDNI: false,
  messageError: "",
  fieldsSet: undefined,
  createLoadingProfesor: false,
  profesorExisting: false,
  successProfesor:false,
  loadignCreateProfesor:false,
  registerDataNewProfesor: {
    role: Roles.profesor,
    apellidos: "",
    dni: "",
    emailNewProfesor: "",
    name: "",
    passwordNewProfesor: "",
  },
  // Asignaciones para los profesores
  asignacionesProfesor: [
    {
      curso: "",
      dia: "",
      grado: "",
      horario: "",
      seccion: "",
    },
  ],
  btnDisable: true,
  dataCompleteProfesor: {
    role: Roles.profesor,
    apellidos: "",
    asignaciones: [{ curso: "", dia: "", grado: "", horario: "", seccion: "" }],
    dni: "",
    emailNewProfesor: "",
    name: "",
    passwordNewProfesor: "",
  },
  createNewProfesor() {
    set({ btnDisable: false });
  }, 
  //Ya esta todo, solo falta mantar a la base de datos y mostrarlo en la patannlla lista profesores
  //Enviar los datos a la db, todo mayuscula y registrando al profesor
  async sendDataCompleteProfesor() {
    const { dataCompleteProfesor,profesorExistingUpdate, successProfesorUpdate}= get()
    set({loadignCreateProfesor: true  })
    const { emailNewProfesor, passwordNewProfesor } = dataCompleteProfesor;
    if (!emailNewProfesor && !passwordNewProfesor)return (console.error(`Sin datos ${emailNewProfesor} ${passwordNewProfesor}`) )
    try {     
      //Funciones, (hooks), para convertir y create la validacion de los profesor y enviar a la db
      const dataMayuscula = convertirAMayusculas(dataCompleteProfesor)
      const newProfesor = await createCredentialsProfesor(emailNewProfesor,passwordNewProfesor,profesorExistingUpdate ) 
      if (newProfesor) {
        const {uid} = newProfesor
        await sendDataDbFirestore(dataMayuscula, uid, successProfesorUpdate)      
        set({loadignCreateProfesor: false  })
        return
      }       
      set({loadignCreateProfesor: false  })
      return
    }  
    catch (error) {
    console.log(error);
    set({loadignCreateProfesor: false  })
      return
    }
  },
  //cargar los datos
  onSubmitAddAsignaciones(data, { resetForm }) {
    const { registerDataNewProfesor, btnDisable, fieldsSet, sendDataCompleteProfesor } = get();
      if (fieldsSet) {
      fieldsSet("email", "");
      fieldsSet("password", "");
      //operador de coalescencia nula, ?? devuelve el valor de nombres si no es undefined, o una cadena vacía "" en caso de que sea undefined.
      fieldsSet("name", "");
      fieldsSet("apellidos", "");
      //Actrualizalos todo los datos para enviarlo al db
      set({
        dataCompleteProfesor: {
          ...registerDataNewProfesor,
          asignaciones: [...data.asignacionesProfesor],
        },
      });
      sendDataCompleteProfesor() 
      set({ btnDisable: !btnDisable });
      resetForm();
     }
  },
    getValuesFields(setFields) {
    //setFields, actualizado, para rellenar los inputs, con informacion automatica, generada
    set({ fieldsSet: setFields });
  },
  async createWithDni({ dni }, { resetForm }) {
    const { createNewProfesor } = get();
    //Para creacion de los datos del profesor, email, password,
    try {
      const { fieldsSet } = get();
      const { data, message } = (await getFetchDNI(
        dni
      )) as ResponseGetDataFetchDni;
      if (message === MessageErrorsFetchs.notValid)
        return set({ messageError: message, messageErrorFetchDNI: true });
      if (data) {
        const {apellidoMaterno, apellidoPaterno,nombres,numeroDocumento,tipoDocumento,} = data;
        if (fieldsSet) {
          const dataGenerator = {
            apellidos: `${apellidoPaterno} ${apellidoMaterno}`,
            nombres,
            numeroDocumento,
            tipoDocumento,
          };
          //Generador de email y password
          const emailNewProfesor = generatorEmail(dataGenerator);
          const passwordNewProfesor = generatorPassword(dataGenerator);
          if (emailNewProfesor && passwordNewProfesor) {
            //Actualizamos con los datos que generamos
            set({
              registerDataNewProfesor: {
                role: Roles.profesor,
                apellidos: dataGenerator.apellidos,
                emailNewProfesor,
                passwordNewProfesor,
                name: dataGenerator.nombres,
                dni: numeroDocumento,
              },
            });
            const { apellidos, nombres } = dataGenerator;
            fieldsSet("email", emailNewProfesor);
            fieldsSet("password", passwordNewProfesor);
            //operador de coalescencia nula, ?? devuelve el valor de nombres si no es undefined, o una cadena vacía "" en caso de que sea undefined.
            fieldsSet("name", nombres ?? "");
            fieldsSet("apellidos", apellidos);
            createNewProfesor();
          }
        }
        resetForm();
      }
      resetForm();
    } catch (error) {
      console.log(error);
      resetForm();
    }
  },
  closeModalMessageError() {
    set({ messageErrorFetchDNI: false });
  },
  updateBtnExitNeWProfesor: () => {
    const { btnDisable } = get();
    if (btnDisable === false) return set({ btnDisable: true });
  },
  profesorExistingUpdate() {
    const { profesorExisting }= get()
    set({ profesorExisting: !profesorExisting  })
  },
  successProfesorUpdate() {
    const { successProfesor }= get()  
    set({ successProfesor: !successProfesor })
  },
}));

export default stateRegisterNewProfesor;
