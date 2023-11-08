interface StateFunctionsClean {
  onSubmitNewStudentClean: (data: NewStudent, helper: () => void) => void;
  getValueDniClean: (dni: string, setValuesInputs: UpdateInputs) => void;
  studentUpdateNotFoundClean: () => void;
  updateNormalBtnDisableClean: () => void;
}
interface StateMainStudentClean extends StateFunctionsClean {
  studeClean: NewStudent;
  buttonDisableClean: boolean;
  studentNotFoundClean: boolean;
}
