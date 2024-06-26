import stateRegisterNewProfesor from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";
import {
  Form,
  Formik,
} from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { initialValuesNewProfesor } from "../InputAddNewProfesor/InitialValuesNewProfesor";
import { inputsValidationsNewProfesor } from "../InputAddNewProfesor/InputsValidationsNewProfesor";
import InformationGeneral from "./InformationGeneral";
import UserNewProfesor from "./UserNewProfesor";
import PanelAsignacionesNewProfesor from "./AddAsignacionesProfesores/PanelAsignacionesNewProfesor";

const FormAddNewProfesores = () => {
  const { createNewProfesor } = stateRegisterNewProfesor();
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
              <InformationGeneral
                setFields={setFieldValue}
                errors={errors}
                touched={touched}
                fieldProps={getFieldProps}
              />
              <UserNewProfesor
                errors={errors}
                touched={touched}
                fieldProps={getFieldProps}
              />
            </div>
          </Form>
        )}
      </Formik>
      {/* Esta fuera del formik, así que tengo que darle el fromik para validar */}
      <div className="flex-[0_1_100%] flex items-start my-7 justify-center">
        <div className="border flex-[0_1_55rem] min-h-[35rem] flex flex-col justify-between bg-blue-400/20 rounded-lg shadow-xl p-3">
          {/* Panel para las asignacioens a cada profesores */}
          <div className="flex-[0_1_100%]">
            <PanelAsignacionesNewProfesor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddNewProfesores;
