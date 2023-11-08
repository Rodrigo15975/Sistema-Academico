import { Formik, FormikHelpers } from 'formik'
import React from 'react'


interface FormFields {
  [key: string]: string | number | boolean;
}

interface ValidationSchema<T> {
  [key: string]: (value: T) => T;
}

interface PropsFormikReutizable {
  initialValues: FormFields
  validationSchema: ValidationSchema<FormFields>;
  onSubmit: (values: FormFields, formikHelpers: FormikHelpers<FormFields>) => void;
  children: React.ReactNode
}



const FormikReutizable: React.FC<PropsFormikReutizable> = ({ initialValues, validationSchema, children, onSubmit }) => {
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {children}
      </Formik>
    </>
  )
}

export default FormikReutizable