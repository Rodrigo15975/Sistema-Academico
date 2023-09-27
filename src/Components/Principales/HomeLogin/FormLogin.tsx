import SesionLogin from "./SesionLogin";
import bgHome from "./img/bgLogin.webp";
import logo from "./img/logoAcademy.svg";
const FormLogin = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-[0_1_98.375rem] max-[768px]:min-h-[45rem] max-[768px]:p-[1.5rem] outline-double outline-black/10 max-sm:p-[.5rem] p-2 bg-login min-h-[54rem] rounded-lg shadow-sm ">
        <div className="flex flex-col justify-between flex-[0_1_33.25rem] border max-[768px]:min-h-[39.625rem] max-sm:p-4 bg-white min-h-[45.625rem] rounded-lg ">
          {/* Afecta en el basis en height, razón esta en flex-colum */}
          <div className="animate-fade animate-once flex-[0_1_100%]  pt-[2rem] pl-[2rem] max-sm:p-0 max-sm:text-center font-titleFontLogin font-extrabold text-4xl ">
            <h1 className="text-[#202020]">Academy!</h1>
            <img src={logo} className="animate-wiggle-more animate-duration-[2000ms] animate-ease-linear m-auto h-[10rem] w-[10rem]"  alt="RDG" />
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
        <div className="animate-fade animate-once animate-delay flex-[0_1_31.25rem] border min-h-[45.625rem] overflow-hidden rounded-md max-[768px]:hidden flex justify-center items-center relative">
          <img className="absolute w-full h-full object-cover" src={bgHome} alt="Academy" />
        </div>
      </div>
    </>
  );
};

export default FormLogin;
