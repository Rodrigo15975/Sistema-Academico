interface StateFuntions {
  getDataFormEdit: (data: AsignacionesProfesor) => void;
  clearDataFormOpen: () => void;
  clearDataForUpdateAsignaciones: ()=> void
  setFormOpen: (data: AsignacionesProfesor) => void;
  getForUpdate: ({ asignaciones, idDoc, index }: PropsForUpdate) => void;
  updateBtnDisableFormEdit: ()=> void
  stateOriginBtnDisableFormEdit: ()=>void
  updateSuccessEdit: ()=>void
}

type PropsForUpdate = {
  idDoc: string;
  index: number;
  asignaciones: AsignacionesProfesor[];
};

interface StateEditMain extends StateFuntions {
  newAsignaciones: AsignacionesProfesor;
  formOpen: boolean;
  successEdit: boolean,
  getDataList: AsignacionesProfesor;
  btnDisableFormEdit: boolean
  dataForUpdateAsignaciones: {
    idDoc: string;
    index: number;
    asignaciones: AsignacionesProfesor[];
  };
}
