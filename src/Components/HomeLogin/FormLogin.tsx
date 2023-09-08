import SesionLogin from "./SesionLogin";
import bgHome from "./img/bgLogin.png";
const FormLogin = () => {
  return (
    <>
      <div className=" flex justify-center items-center flex-[0_1_98.375rem]  p-2 bg-[#bfdfff] min-h-[54rem] rounded-lg shadow-xl ">
        <div className=" flex flex-col justify-between flex-[0_1_39.25rem] bg-white min-h-[52.625rem] rounded-lg ">
          {/* Afecta en el basis en height, razón esta en flex-colum */}
          <div className=" animate-fade animate-once flex-[0_1_10rem] pt-[2rem] pl-[2rem] font-titleFontLogin font-extrabold text-4xl ">
            <h1 className="text-textHomeLogin">Academy!</h1>
          </div>
          <div className="flex-[0_1_20rem] flex justify-center items-center animate-fade animate-once animate-delay-[300ms] ">
            <SesionLogin />
          </div>
          <div className="before:bg-bgBackGroundLogin  flex-[0_1_10rem] font-textFontLogin text-black/60 underline flex items-center justify-center ">
            <p className=" animate-fade animate-once animate-delay-[500ms]  cursor-pointer hover:text-red-600 transition font-semibold ">     
              All-Rights Reserved, 2023 Academy.
            </p>
          </div>
        </div>
        <div className=" animate-fade animate-once animate-delay  flex-[0_1_22.6875rem]  min-h-[52.625rem] flex justify-center items-center relative   ">
          <img
            src={bgHome}
            alt="Academy"
            className="h-full w-full absolute object-cover rounded-lg  "
          />
        </div>
      </div>
    </>
  );
};

export default FormLogin;
