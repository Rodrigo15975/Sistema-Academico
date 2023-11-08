import { Field, FormikErrors } from "formik"
import { FcSearch } from "react-icons/fc";
import stateStudentClean from "./StateStudentClean";
export interface PropsInputsRepitente {
  touched: { [key: string]: boolean }; // Objeto que almacena información sobre si un campo ha sido tocado (enfocado)
  errors: { [key: string]: string }; // Objeto que almacena mensajes de error para los campos
  dni: string
  setFields: {
    (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ): Promise<void | FormikErrors<NewStudent>>;
  };
}


const InputDniClean = ({ errors, touched, dni, setFields }: PropsInputsRepitente) => {
  const { getValueDniClean } = stateStudentClean()

  const sendDniValue = () => {
    getValueDniClean(dni, setFields)
  }

  return (
    <div className="flex w-[20rem] justify-between">
      <Field name="dni" className={`
         pl-2 border
          focus:bg-blue-600/10 
        outline-none flex-[0_1_15rem]
         h-[2.5rem]
         rounded-md ${errors.dni && touched.dni ? 'border-red-500/30' : ''
        }`
      } placeholder="DNI" />
      <div onClick={sendDniValue} className="flex-[0_1_4.5rem] hover:bg-blue-800 transition cursor-pointer flex items-center justify-center bg-blue-400 rounded-md gap-2">
        <FcSearch />
      </div>
    </div>
  )
}

export default InputDniClean