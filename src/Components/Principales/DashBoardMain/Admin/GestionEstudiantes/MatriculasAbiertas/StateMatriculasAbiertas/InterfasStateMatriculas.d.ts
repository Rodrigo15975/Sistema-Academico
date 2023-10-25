
interface FnMainStateMatriculasAbierta {
  changeOption: (value: string) => void;
}

interface MainStateMatriculaAbierta extends FnMainStateMatriculasAbierta {
  alumnOption: string;
}
