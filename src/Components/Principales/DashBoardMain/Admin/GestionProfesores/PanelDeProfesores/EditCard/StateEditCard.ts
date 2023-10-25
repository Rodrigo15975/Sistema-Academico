import { create } from "zustand";
import { dbFire, doc,updateDoc } from "../../../../../../../firebase/Config/firestore";
const stateEditCard = create<StateEditMain>((set, get) => ({
  newAsignaciones: {
    curso: "",
    dia: "",
    grado: "",
    horario: "",
    seccion: "",
  },
  successEdit: false,
  btnDisableFormEdit: true,
  dataForUpdateAsignaciones: {
    asignaciones: [],
    idDoc: "",
    index: 0,
  },
  // Obtener los datos de la lista, para mostrarlo, en  el Formedit --> Asignaciones
  getDataList: {
    curso: "",
    dia: "",
    grado: "",
    horario: "",
    seccion: "",
  },
  formOpen: false,
  //Aca obtendran todo los datos
  async getDataFormEdit(data) {
    const { dataForUpdateAsignaciones, clearDataFormOpen, updateSuccessEdit } =
      get();
    const { index, asignaciones, idDoc } = dataForUpdateAsignaciones;
    const dataMayuscula: AsignacionesProfesor = {
      curso: data.curso.toLocaleUpperCase(),
      dia: data.dia.toLocaleUpperCase(),
      grado: data.grado.toLocaleUpperCase(),
      horario: data.horario.toLocaleUpperCase(),
      seccion: data.seccion.toLocaleUpperCase(),
    };
    try {
      const ref = doc(dbFire, `profesores/${idDoc}`);
      //Copia de las asignaciones
      const asignacionesActuales = asignaciones.slice();
      //Cambiamos las asignacionesactualez por las nuevas
      asignacionesActuales[index] = dataMayuscula;      
      //Enviamos los datos cambiados
      await updateDoc(ref, {asignaciones: asignacionesActuales })
      updateSuccessEdit();
      clearDataFormOpen();
    } catch (error) {
      console.log(`Erro al actualizar asignacion: ${error}`);
    }
  },
  setFormOpen(data) {
    //Actualizamos para mostrar los datos en el form editAsignaciones
    set({ getDataList: data });
    const { formOpen } = get();
    set({ formOpen: !formOpen });
  },
  clearDataFormOpen() {
    set({
      getDataList: {
        curso: "",
        dia: "",
        grado: "",
        horario: "",
        seccion: "",
      },
    });
  },
  clearDataForUpdateAsignaciones() {
    set({
      dataForUpdateAsignaciones: { asignaciones: [], idDoc: "", index: 0 },
    });
  },
  updateBtnDisableFormEdit() {
    set({ btnDisableFormEdit: false });
  },
  //Actualiza el aviso se actualizo los datos
  updateSuccessEdit() {
    const { successEdit } = get();
    set({ successEdit: !successEdit });
  },
  //Cada vez que cierra la ventana del edit, se bloqueara el btn de registrar informacion
  stateOriginBtnDisableFormEdit() {
    set({ btnDisableFormEdit: true });
  },
  getForUpdate({ asignaciones, idDoc, index }) {
    //Datos que utilizaremos para actualizar las asignaciones
    set({ dataForUpdateAsignaciones: { asignaciones, idDoc, index } });
  },
}));

export default stateEditCard;
