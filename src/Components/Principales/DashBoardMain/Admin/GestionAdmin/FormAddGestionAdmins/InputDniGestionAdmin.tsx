import { Field, FormikErrors } from "formik"
import { FcSearch } from "react-icons/fc"
import stateGestionAdmins from "../StateGestionAdmins/stateGestionAdmin";

interface PropsInputDniGestionAdmin {
  dni: string
  setFields
    (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ): Promise<void | FormikErrors<ValuesRegisterGestionAdmin>>;
  errors: FormikErrors<ValuesRegisterGestionAdmin>
}

const InputDniGestionAdmin = ({ dni, setFields,errors }: PropsInputDniGestionAdmin) => {
  const { getValueDniGestionAdmin } = stateGestionAdmins()
  const sendValueDni = () => getValueDniGestionAdmin(dni, { setFields })
  return (
    <div className="flex items-center justify-between w-full">
      <Field name="dni" placeholder="DNI" className={`pl-4  h-[2.7rem] font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none flex-[0_1_15rem] rounded-2xl ${errors.dni ? "border-rose-500" :"" } `} />
      <div onClick={sendValueDni} className=" w-[4.5rem] h-[2.5rem] flex cursor-pointer  items-center justify-center">
        <FcSearch className="bg-blue-500 w-[4.5rem] h-[2.5rem] hover:bg-blue-500/40 transition rounded-xl text-xs" />
      </div>
    </div>
  )
}

export default InputDniGestionAdmin