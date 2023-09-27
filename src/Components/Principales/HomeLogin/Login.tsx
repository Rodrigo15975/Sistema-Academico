import ErrorMessagesLogin from "../../Enums/ErrorsMessageLogin";
import IsLoadingAuth from "./Modals/IsLoadingAuth";
import IsLoadingValidationCredentials from "./Modals/IsLoadingValidationCredentials";
import ModalErrorsLogin from "./Modals/ModalErrorsLogin";
import stateAuthLogin from "../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome";
import FormLogin from "./FormLogin";
const Login = () => {
  const {
    isAuthLoading,
    validationCredentials,
    accountDisable,
    passwordIncorrect,
    profesorNotFound,
    closeModalAccountDisable,
    closeModalPasswordIncorrect,
    closeModalProfesorNotFound
  } = stateAuthLogin();
  return (
    <main className="bg-login-home min-h-screen flex justify-center items-center p-[2rem] max-[768px]:p-[1rem]   ">
      {/* Panel Principal */}
      <FormLogin />
      {/* Modals */}
      {isAuthLoading && <IsLoadingAuth />}
      {passwordIncorrect &&
        <ModalErrorsLogin
          closeModal={closeModalPasswordIncorrect}
          textTitle={ErrorMessagesLogin.errorPassword}
          primerParrafo="Por seguridad la cuenta puede ser bloqueada."
          segundoParrafo="Inténtalo nuevamente."
        />
      }
      {profesorNotFound &&
        <ModalErrorsLogin
          textTitle={ErrorMessagesLogin.errorProfesor}
          primerParrafo="Verifique su email por favor "
          segundoParrafo="Verifique su password por favor"
          closeModal={closeModalProfesorNotFound}
        />
      }
      {accountDisable &&
        <ModalErrorsLogin
          textTitle={ErrorMessagesLogin.errorAccount}
          primerParrafo="Cuenta temporalmente suspedida."
          tercerParrafo="Demasiados intentos realizados"
          segundoParrafo="Inténtalo más tarde."
          closeModal={closeModalAccountDisable}
        />
      }
      {/* ------ */}
      {
        validationCredentials && (
          <IsLoadingValidationCredentials />
        )
      }
    </main >
  );
};

export default Login;
