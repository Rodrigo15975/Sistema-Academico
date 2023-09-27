import { create } from "zustand";

const stateNewProfesor = create<StatePanelNewProfesor>(() => ({
  prueba() {
    console.log("hola");    
  },
}));


export default stateNewProfesor