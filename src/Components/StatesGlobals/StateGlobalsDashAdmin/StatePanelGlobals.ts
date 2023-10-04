import { create } from "zustand";

const stateDashAdmin = create<StatePanelNewProfesor>(() => ({
  prueba() {
    console.log("hola");    
  },
}));


export default stateDashAdmin