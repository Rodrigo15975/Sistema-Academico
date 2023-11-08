import { Field, Form, Formik,  FormikHelpers } from "formik"
import { initialValuesGestionAdmin, validationSchemaGestionAdmins } from "./FormAddGestionAdmins/InitialValueValidationGestionAdmin"
import statePanelGestionAdmin from "./StateGestionAdmins/statePanelGestionAdmin"
import { BiUser } from "react-icons/bi"


//Aca recibe todo los datos completos
interface PropsUpdateAdminGesion {
  data: AdminsData
}

const UpdateAdminGestion = ({ data }: PropsUpdateAdminGesion) => {
  const { uid } = data
  const { updateDataAdminGestion } = statePanelGestionAdmin()

  const sendNewData = (newData: ValuesRegisterGestionAdmin, helper: FormikHelpers<ValuesRegisterGestionAdmin>) => {
    //Aca solo le envaimos los datos nuevos a actualizar, y el uid
    const {resetForm }= helper
    updateDataAdminGestion(newData, uid, resetForm)
  }

  return (
    <div className="flex-[0_1_35rem] min-h-[45rem] border p-4 shadow-xl bg-white">
      <Formik
        onSubmit={sendNewData}
        validationSchema={validationSchemaGestionAdmins}
        initialValues={initialValuesGestionAdmin}
      >
        {() => (
          <Form>
            <label className="text-black/60" htmlFor="">Nombre</label>
            <Field name="nombres" placeholder="Nombres" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <label className="text-black/60" htmlFor="">Apellido</label>
            <Field name="apellidos" placeholder="Apellidos" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <label className="text-black/60" htmlFor="">Correo</label>
            <Field name="correo" placeholder="Correo Electrónico" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <label className="text-black/60" htmlFor="">Password</label>
            <Field name="password" placeholder="Password" className="pl-4 font-titleFontLogin focus:bg-green-400/20 transition duration-200 border outline-none w-[20rem] flex-[0_1_3rem]  rounded-2xl border-blue-500/50" />
            <button type="submit" className={`mt-8  "hover:bg-blue-950" : ""} p-3 rounded-2xl text-white  shadow-md flex items-center justify-center gap-2 bg-blue-500 transition`} >
              Actualizar
              <BiUser />
            </button>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export default UpdateAdminGestion