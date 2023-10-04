import stateRegisterNewProfesor from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor"
import { Form, Formik } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { initialValuesNewProfesor } from "../InputAddNewProfesor/InitialValuesNewProfesor";
import { inputsValidationsNewProfesor } from "../InputAddNewProfesor/InputsValidationsNewProfesor";
import InformationGeneral from "./InformationGeneral";
import UserNewProfesor from "./UserNewProfesor";
import PanelAsignacionesNewProfesor from "./AddAsignacionesProfesores/PanelAsignacionesNewProfesor";

const FormAddNewProfesores = () => {
  const { createNewProfesor, btnDisabled } = stateRegisterNewProfesor();
  {/* /ARREGALR EL BOTON, CUANDO SE EJECUTA,
   EL BOTON DE BUSCAR CON DNI, SE ACTIVA EL BTNDISABLED ARREGLAR */}
  return (
    <div className="flex w-full flex-wrap">
      <Formik
        initialValues={initialValuesNewProfesor}
        onSubmit={createNewProfesor}
        validationSchema={inputsValidationsNewProfesor}
      >
        {({ errors, touched, getFieldProps, setFieldValue }) => (
          <Form className="flex flex-[0_1_100%] flex-col gap-2.5">
            <div className="flex min-h-[9.875rem] flex-col">
              <InformationGeneral setFields={setFieldValue} errors={errors} touched={touched} fieldProps={getFieldProps} />
              <UserNewProfesor errors={errors} touched={touched} fieldProps={getFieldProps} />
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex-[0_1_100%] flex items-start mt-7 justify-center" >
        <div className="flex-[0_1_55rem] min-h-[35rem] flex flex-col justify-between bg-blue-400/20 rounded-lg shadow-md">
          {/* Panel para las asignacioens a cada profesores */}
          <div className="flex-[0_1_10rem]">
            <PanelAsignacionesNewProfesor />
          </div>
          <div className="flex-[0_1_2rem] flex justify-end pr-2 pb-2" >
            <button disabled={btnDisabled} type="submit" className="shadow-md mb-2 mr-2 rounded-full flex-[0_1_12rem] min-h-[3rem] bg-[#66ffb3]" >Registrar Información</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddNewProfesores