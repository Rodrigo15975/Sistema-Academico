interface StateFunctionsClean {
  onSubmitNewStudentClean: (data: NewStudent, helper: () => void) => void;
  getValueDniClean: (dni: string, setValuesInputs: UpdateInputs) => void;
  studentUpdateNotFoundClean: () => void;
  updateNormalBtnDisableClean: () => void;
  studentIsMatriculadoUpdateClean: () => void;
  studentMatriculadoSuccesUpdateClean: () => void;
  studentIsMatriculadoUpdate: () => void;
  studentMatriculadoSuccesUpdate: () => void;
}
interface StateMainStudentClean extends StateFunctionsClean {
  studeClean: NewStudent;
  buttonDisableClean: boolean;
  studentNotFoundClean: boolean;
  studentIsMatriculadoClean: boolean;
  successMatriculadoClean: boolean;
}
