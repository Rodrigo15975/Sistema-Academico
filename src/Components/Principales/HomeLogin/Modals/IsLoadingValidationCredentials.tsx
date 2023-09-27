import "./IsLoadingValidationCredentials.css";
const IsLoadingValidationCredentials = () => {
  return (
    <div className="fixed h-full w-full flex justify-center items-center backdrop-blur-md " >
      <span className="credenciales">Validando...</span>
    </div>
  )
}

export default IsLoadingValidationCredentials
