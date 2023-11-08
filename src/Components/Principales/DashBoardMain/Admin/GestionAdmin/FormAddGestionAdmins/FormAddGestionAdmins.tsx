import { BsBackspace } from "react-icons/bs"
import ButtonDiv from "../../../../ButtonDiv"
import { Field, Form, Formik, FormikHelpers } from "formik"
import { BiSolidUserCheck, BiUser } from "react-icons/bi";
import InputDniGestionAdmin from "./InputDniGestionAdmin";
import stateGestionAdmins from "../StateGestionAdmins/stateGestionAdmin";
import { initialValuesGestionAdmin, validationSchemaGestionAdmins } from "./InitialValueValidationGestionAdmin";
interface PropsFormGestionAdmins {
  setUpdate: () => void
}

const FormAddGestionAdmins = ({ setUpdate }: PropsFormGestionAdmins) => {
  const { btnDisabledForm, setUpdateBtnDisabledForm, onSubmitRegisterGestionAdmin } = stateGestionAdmins()
  const btnDisabled = true

  const closeForm = () => {
    setUpdate()
    if (!btnDisabledForm) return setUpdateBtnDisabledForm()
    
  }

  const sendOnSubmit = (data: ValuesRegisterGestionAdmin, helper: FormikHelpers<ValuesRegisterGestionAdmin>) => {
    const { resetForm } = helper
    onSubmitRegisterGestionAdmin(data, resetForm)
    return
  }


  return (
    <div className="flex flex-col flex-[0_1_40rem] rounded-3xl border-t shadow-lg p-4 min-h-[45rem] relative bg-white items-center justify-center">
      <div className="text-2xl mb-8 text-black/50">
        <p className="flex items-center justify-center gap-2">Nuevo Administrador <BiSolidUserCheck className="text-4xl" /> </p>
      </div>
      <ButtonDiv setUpdate={closeForm} className="p-4 cursor-pointer hover:scale-95 transition hover:bg-blue-500 text-white bg-blue-500/50 absolute -top-4 -right-4 rounded-2xl text-3xl" >
        <BsBackspace />
      </ButtonDiv>
      <Formik
        onSubmit={sendOnSubmit}
        initialValues={initialValuesGestionAdmin}
        validationSchema={validationSchemaGestionAdmins}
      >
        {({ setFieldValue, values, errors }) => (
          <Form className="flex  flex-col gap-3">
            <InputDniGestionAdmin setFields={setFieldValue} dni={values.dni} errors={errors} />
            <label className="text-black/60" htmlFor="">Nombre</label>
            <Field name="nombres" disabled={btnDisabled} placeholder="Nombres" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <label className="text-black/60" htmlFor="">Apellido</label>
            <Field name="apellidos" disabled={btnDisabled} placeholder="Apellidos" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <label className="text-black/60" htmlFor="">Correo</label>
            <Field name="correo" disabled={btnDisabled} placeholder="Correo Electrónico" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <label className="text-black/60" htmlFor="">Password</label>
            <Field name="password" disabled={btnDisabled} placeholder="Password" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <button type="submit" className={`mt-8 ${btnDisabledForm !== true ? "hover:bg-blue-950" : ""} p-3 rounded-2xl text-white  shadow-md flex items-center justify-center gap-2 bg-blue-500 transition`} >
              Registrar
              <BiUser />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormAddGestionAdmins