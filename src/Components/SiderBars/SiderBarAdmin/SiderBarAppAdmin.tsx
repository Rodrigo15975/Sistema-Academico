import { BiLogOut } from "react-icons/bi"
import stateAuthLogin from "../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome"
import SiderBarAdmin from "./SiderBarAdmin";
const SiderBarAppAdmin = () => {
  const { logoutUser } = stateAuthLogin()
  return (
    <>
      <div className="flex flex-col justify-between gap-2 flex-[0_0_13.825rem] min-h-[100vh] shadow-xl border-r" >
        <div className="flex flex-col fixed ">
          <div className="flex text-white animate-fade bg-titleDashboards mb-3 animate-delay-[100ms] animate-ease-linear flex-[0_1_6rem] text-center h-[7rem] items-center justify-center text-3xl" >
            <p>Academy</p>
          </div>
          <div className="flex-[0_1_88vh] flex flex-col justify-between" >
            <SiderBarAdmin />
            <div className="mt-4 p-2 animate-fade animate-delay-[100ms] animate-ease-linear" >
              <div onClick={logoutUser} className="m-auto bg-titleDashboards text-white cursor-pointer flex items-center transition justify-center w-full p-2 text-1xl rounded-full">
                <BiLogOut className="mr-2 text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default SiderBarAppAdmin
