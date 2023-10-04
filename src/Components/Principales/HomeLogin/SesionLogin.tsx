import { Form, Formik } from "../../ImportsDeterminadas/ImportsDeterminadas";
import InputsFormLogin from "./Input/InputsLogin";
import { initialValueLogin } from "./InitialValues";
import { LoginValidationSchema } from "./Validations/ValidationLoginHome";
import stateAuthLogin from "../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SesionLogin = () => {
  const navigate = useNavigate();
  //Auth
  const { authUser, loginUser, renderNavigate } = stateAuthLogin();
  useEffect(() => {
    renderNavigate(navigate)
    authUser()
    InputsFormLogin
  }, [authUser, navigate, renderNavigate]);

  return (
    <>

      <Formik
        onSubmit={loginUser}
        initialValues={initialValueLogin}
        validationSchema={LoginValidationSchema}
      >
        {({ errors, touched, getFieldProps, }) => (
          <Form className="flex-[0_1_23rem]">
            <div className="font-titleFontLogin mb-2 text-2xl">
              <p className="text-[#202020]/90">Login</p>
            </div>
            <div className=" flex flex-col justify-center">
              <InputsFormLogin
                name="email"
                label="Email"
                fieldProps={getFieldProps}
                type="email"
                errors={errors}
                touched={touched}
                textPlaceHolder="Email@hotmail.com"
              />
              <InputsFormLogin
                name="password"
                label="Password"
                fieldProps={getFieldProps}
                type="password"
                errors={errors}
                touched={touched}
                textPlaceHolder="*******"
              />
            </div>
            <div className="flex flex-col gap-2 mt-[3rem]">
              <button
                type="submit"
                className="bg-[#202020] hover:bg-white hover:outline-double hover:text-black text-white rounded-md shadow-lg hover:shadow-none transition font-titleFontLogin p-3"
              >
                Sign in
              </button>
              <div className="flex justify-end text-[#202020]/70 hover:text-blue-600 cursor-pointer underline mt-[1rem] font-medium">
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
