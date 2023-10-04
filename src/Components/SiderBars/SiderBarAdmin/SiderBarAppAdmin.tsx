import { BiLogOut } from "react-icons/bi"
import stateAuthLogin from "../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome"
import SiderBarAdmin from "./SiderBarAdmin";

const SiderBarAppAdmin = () => {
  const { logoutUser } = stateAuthLogin()
  return (
    <>
      <div className="flex flex-col justify-between gap-2 pb-4 flex-[0_0_13.125rem] min-h-[100vh] bg-[#fffff] shadow-lg" >
        <div className="animate-fade animate-delay-[100ms] animate-ease-linear flex-[0_1_6rem] text-blue-600/90 border-b border-blue-600/50 shadow-lg text-center flex items-center justify-center text-3xl" >
          <p>Academy</p>
        </div>
        <div className="flex-[0_1_46.5rem]" >
          <SiderBarAdmin />
        </div>
        <div className="mt-4 p-2 animate-fade animate-delay-[100ms] animate-ease-linear" >
          <div onClick={logoutUser} className="m-auto bg-[#4297FF] cursor-pointer hover:scale-95 text-white flex items-center transition justify-center w-full p-2 text-1xl rounded-full">
            <BiLogOut className="mr-2 text-3xl" />
          </div>
        </div>
      </div >
    </>
  )
}

export default SiderBarAppAdmin
