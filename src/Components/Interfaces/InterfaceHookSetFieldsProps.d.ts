interface PropsFieldsHook {
  setFields: {
    (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ): Promise<void | FormikErrors<initialValuesNewProfesor>>;
  };
  name: string;
  updateValue: string;
}
interface PropsField {
  setFields: {
    (
      field?: string,
      value?: string,
      shouldValidate?: boolean | undefined
    ): Promise<void | FormikErrors<initialValuesNewProfesor>>;
  };
}
