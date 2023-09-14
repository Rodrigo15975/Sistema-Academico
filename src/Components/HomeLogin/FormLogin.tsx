import SesionLogin from "./SesionLogin";
import bgHome from "./img/bgLogin.webp";
const FormLogin = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-[0_1_98.375rem] max-[768px]:min-h-[45rem] max-[768px]:p-[1.5rem] max-sm:p-[.5rem] p-2 bg-[#0C89B0] min-h-[54rem] rounded-lg shadow-xl ">
        <div className="flex flex-col justify-between flex-[0_1_39.25rem] shadow-black/30 shadow-2xl max-[768px]:min-h-[39.625rem] max-sm:p-4 bg-white min-h-[45.625rem] rounded-lg ">
          {/* Afecta en el basis en height, razón esta en flex-colum */}
          <div className=" animate-fade animate-once flex-[0_1_10rem] pt-[2rem] pl-[2rem] max-sm:p-0 max-sm:text-center font-titleFontLogin font-extrabold text-4xl ">
            <h1 className="text-textHomeLogin">Academy!</h1>
          </div>
          <div className="flex-[0_1_20rem] flex justify-center items-center animate-fade animate-once animate-delay-[300ms] ">
            <SesionLogin />
          </div>
          <div className="before:bg-bgBackGroundLogin  flex-[0_1_10rem] font-textFontLogin text-black/60 underline flex items-center justify-center ">
            <p className="animate-fade animate-once animate-delay-[500ms] cursor-pointer hover:text-red-600 transition font-semibold ">
              All-Rights Reserved, 2023 Academy.
            </p>
          </div>
        </div>
        <div className="animate-fade animate-once animate-delay flex-[0_1_22.6875rem] min-h-[45.625rem] overflow-hidden rounded-md max-[768px]:hidden flex justify-center items-center relative">
          <img className="absolute w-full h-full object-cover hover:scale-105 transition " src={bgHome} alt="Academy"/>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
