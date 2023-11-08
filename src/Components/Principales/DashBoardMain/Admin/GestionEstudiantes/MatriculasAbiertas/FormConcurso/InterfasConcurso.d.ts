interface StudentConcurso extends NewStudent {
  categoria: string;
}

interface StateFunctionsStudent {
  onSubmitNewStudent: (data: NewStudent, helper: () => void) => void;
  //ElUpdateInputs es de la interfas Repitentes
  getValueDni: (dni: string, setValuesInputs: UpdateInputs) => void;
  studentUpdateNotFoundConcurso: () => void;
  updateNormalBtnDisable: () => void;
}
interface StateMainConcurso extends StateFunctionsStudent {
  studentConcurso: StudentConcurso;
  buttonDisableConcurso: boolean;
  studentNotFoundConcurso: boolean;
}
