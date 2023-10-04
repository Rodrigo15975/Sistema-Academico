import { create } from "zustand";
import { getFetchDNI } from "./Hooks/HookFechaDNI";
import { MessageErrorsFetchs, ViewMessageErrosFetchs } from "./Enums/MessageErrorsFetch";
import { generatorEmail,generatorPassword } from "./Hooks/GeneratorDatosNewProfesor";

const stateRegisterNewProfesor = create<StateNewProfesor>((set, get) => ({
  messageErrorFetchDNI: false,
  messageError: "",
  fieldsSet: undefined,
  registerDataNewProfesor:{
    apellidos:"",
    emailNewProfesor:"",
    name:"",
    passwordNewProfesor:"",
    dni: "",
  },
  btnDisabled: true,
  prueba: ()=>{
    // console.log(data);
 },
  getValuesFields(setFields) {
    //setFields, actualizado, para rellenar los inputs, con informacion automatica, generada
    set({ fieldsSet: setFields });
  },
  
  async createWithDni( {dni} , { resetForm }) {
    try {
      const{fieldsSet, buttonDisabled }= get()
      const data = await getFetchDNI(dni)  ; 
      //VERIFICAMOS SI HAY DATA
      if (data) {
        const { apellidoMaterno,apellidoPaterno,codVerifica,dni,message,nombres } = data       
        if (message === MessageErrorsFetchs.notFoundDni) return set({messageErrorFetchDNI: true, messageError: MessageErrorsFetchs.notFoundDni}),resetForm()
        if (message === MessageErrorsFetchs.failed ) return set({ messageErrorFetchDNI: true, messageError: ViewMessageErrosFetchs.failed  })
        if (fieldsSet) {
          const dataGenerator={
            apellidos: `${apellidoPaterno} ${apellidoMaterno}`,
            nombres,
            dni,
            codVerifica
          };
          //Generador de email y password 
          const emailNewProfesor = generatorEmail(dataGenerator)
          const passwordNewProfesor= generatorPassword(dataGenerator)
         if (emailNewProfesor && passwordNewProfesor) {
           set({registerDataNewProfesor: {
            apellidos: dataGenerator.apellidos,
            emailNewProfesor,
            passwordNewProfesor,
            name: dataGenerator.nombres,
            dni: dataGenerator.dni
          }})
          const { apellidos,nombres} = dataGenerator          
            fieldsSet("email", emailNewProfesor)
            fieldsSet("password",passwordNewProfesor)
            //operador de coalescencia nula, ?? devuelve el valor de nombres si no es undefined, o una cadena vacía "" en caso de que sea undefined.
            fieldsSet("name",nombres ?? "")
            fieldsSet("apellidos",apellidos)    
            buttonDisabled()             
         }          
        }
      }     
      resetForm();
    } catch (error) {
      console.log(error);
      resetForm();
    }
  },
  async createNewProfesor() {
      const {  registerDataNewProfesor} =get()
    console.log(registerDataNewProfesor);    
  },
  buttonDisabled() {
    set({ btnDisabled: false })
  },
  closeModalMessageError() {
    set({ messageErrorFetchDNI: false });
  },
}));

export default stateRegisterNewProfesor;
