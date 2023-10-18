type GetDataListaProfesores = {
  apellidos: string;
  asignaciones: [
    {
      curso: string;
      dia: string;
      grado: string;
      horario: string;
      seccion: string;
    }
  ];
  dni: string;
  emailNewProfesor: string;
  name: string;
  passwordNewProfesor?: string;
  role: string;
  uid: string;
  idDoc: string,
};
interface PropsCardGetDataListaProfesores {
  data: GetDataListaProfesores
}
//Main principal para las variants
interface StateMainVariants {
  listaDeProfesoresDB: GetDataListaProfesores[];
  loadingList: boolean
  deleteIsTrue: boolean
}
//Main principal para las funciones
interface StateListaPanel extends StateMainVariants {
  getDataListProfesor: () => Promise<void>;
  deleteListProfesor: (uid: string)=> Promise<void>
  deleteIstrueUpdate: ()=> void
}
