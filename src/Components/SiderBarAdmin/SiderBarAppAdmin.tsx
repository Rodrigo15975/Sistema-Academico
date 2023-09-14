import { BiLogOut } from "react-icons/bi"
import stateAuthLogin from "../../StatesGlobals/LoginHome/StateGlobalLoginHome"
import SiderBarAdmin from "./SiderBarAdmin"
import ProfileAdmin from "../DashBoardMain/Admin/Profile/ProfileAdmin"

const SiderBarAppAdmin = () => {
  const { logoutProfesor } = stateAuthLogin()
  return (
    <>
      <div className=" flex flex-col justify-between  gap-3 py-4  flex-[0_0_18.125rem] min-h-[100vh] bg-[#1E1B1B] " >
        <div className="flex-[0_1_13.5rem] mb-8 border-b pb-4 border-white/30   " >
          <ProfileAdmin />
        </div>
        <div className="flex-[0_1_33.5rem]" >
          <SiderBarAdmin />
        </div>
        <div className="flex-[0_1_3rem] mt-4 p-2  " >
          <button onClick={logoutProfesor} className="bg-bgGreen flex items-center  hover:text-white transition hover:bg-blue-600  justify-center  w-full min-h-[2.5rem] text-1xl rounded-3xl ">
            <BiLogOut className="mr-2 text-3xl   " />Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  )
}

export default SiderBarAppAdmin
