import { Field, FormikErrors } from "formik"
import { FcSearch } from "react-icons/fc";
import stateConcurso from "./StateConcurso";
export interface PropsInputConcurso {
  touched: { [key: string]: boolean };
  errors: { [key: string]: string };
  setFields: {
    (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ): Promise<void | FormikErrors<NewStudent>>;
  };
  dni: string
}


const InputDniConcurso = ({ errors, touched, setFields, dni }: PropsInputConcurso) => {
  const { getValueDni } = stateConcurso();
  const sendData = () => {
    getValueDni(dni, setFields)
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
      <div onClick={sendData} className="flex-[0_1_4.5rem] hover:bg-blue-800 transition cursor-pointer flex items-center justify-center bg-blue-400 rounded-md gap-2">
        <FcSearch />
      </div>
    </div>
  )
}

export default InputDniConcurso