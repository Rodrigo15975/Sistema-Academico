import { Form, Formik } from "formik";
import InputsFormLogin from "./Input/InputsLogin";
import { initialValueLogin } from "./InitialValues";
import { LoginValidationSchema } from "../../Validations/ValidationLoginHome";

import stateAuthLogin from "../../StatesGlobals/LoginHome/StateGlobalLoginHome";

const SesionLogin = () => {
  const { prueba } = stateAuthLogin();

  return (
    <>
      <Formik
        onSubmit={prueba}
        initialValues={initialValueLogin}
        validationSchema={LoginValidationSchema}
      >
        {({ errors, touched, getFieldProps }) => (
          <Form className="flex-[0_1_23rem]">
            <div className="font-titleFontLogin mb-2 text-2xl">
              <p className="text-[#222121]/80">Login</p>
            </div>
            <div className=" flex flex-col justify-center">
              <InputsFormLogin
                name="email"
                label="Email"
                fieldProps={getFieldProps}
                type="email"
                errors={errors}
                touched={touched}
                className=""
                textPlaceHolder="Email@hotmail.com"
              />
              <InputsFormLogin
                name="password"
                label="Password"
                fieldProps={getFieldProps}
                type="password"
                errors={errors}
                touched={touched}
                className=""
                textPlaceHolder="*******"
              />
            </div>
            <div className="flex flex-col gap-2 mt-[3rem]">
              <button
                type="submit"
                className="bg-blue-300  hover:text-white  text-black/90  rounded-md shadow-lg hover:shadow-none transition font-extrabold font-titleFontLogin p-3"
              >
                Sign in
              </button>
              <div className="flex justify-end text-[#222121]/70 hover:text-rose-500  cursor-pointer underline mt-[1rem]   font-medium">
                <p>Olvidaste la contraseña?</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SesionLogin;
