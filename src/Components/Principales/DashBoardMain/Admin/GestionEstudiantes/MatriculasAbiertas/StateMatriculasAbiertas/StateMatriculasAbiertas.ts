import { create } from "zustand";

const stateMatriculasAbiertas = create<MainStateMatriculaAbierta>((set) => ({
    alumnOption: "NUEVO",
    changeOption: (newOption) => {
      set({alumnOption: newOption })
    },
  })
);

export default stateMatriculasAbiertas;
