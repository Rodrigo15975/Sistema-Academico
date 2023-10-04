import { FcSearch } from "react-icons/fc";
import { variantsAnimationButtons } from "../../../../../Animations/VariantsAnimation/VariantsAnimation";
import { Formik, Form, m } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { initialValueDni } from "../InputAddNewProfesor/InitialValuesNewProfesor";
import stateRegisterNewProfesor from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";
import { inputValidationDni } from "../InputAddNewProfesor/InputsValidationsNewProfesor";
import InputDniProfesor from "./InputDniProfesor";

const InputDniNewProfesor = () => {
  const { createWithDni } = stateRegisterNewProfesor()
  return (
    <>
      <Formik
        initialValues={initialValueDni}
        onSubmit={createWithDni}
        validationSchema={inputValidationDni}
      >
        {({ errors, touched, getFieldProps, }) => (
          <Form className="flex flex-[0_1_100%]">
            <div className="flex flex-[0_1_100%] gap-3 justify-center">
              <InputDniProfesor errors={errors} touched={touched} fieldProps={getFieldProps} />
              <m.button type="submit" variants={variantsAnimationButtons} whileTap={"whileTap"} className="bg-[#80ffd2] h-[3rem] w-[4.875rem] flex items-center justify-center text-3xl rounded-lg"><FcSearch /></m.button>
            </div>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default InputDniNewProfesor
