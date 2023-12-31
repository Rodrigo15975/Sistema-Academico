import { BiLogOut } from "react-icons/bi"
import SiderBarProfesor from "./SiderBarProfesor"
import stateAuthLogin from "../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome"
import ProfileProfesor from "../../Principales/DashBoardMain/Profesor/Profile/ProfileProfesor"
const SiderBarAppProfesor = () => {
  const { logoutUser } = stateAuthLogin()
  return (
    <>
      <div className=" flex flex-col justify-between gap-3 py-4 flex-[0_0_18.125rem] min-h-[100vh] bg-[] " >
        <div className="flex-[0_1_13.5rem] mb-8 border-b pb-4  " >
          <ProfileProfesor />
        </div>
        <div className="flex-[0_1_33.5rem]" >
          <SiderBarProfesor />
        </div>
        <div className="flex-[0_1_3rem] mt-4 p-2  " >
          <button onClick={logoutUser} className="bg-bgGreen flex items-center  hover:text-white transition hover:bg-blue-600  justify-center  w-full min-h-[2.5rem] text-1xl rounded-3xl ">
            <BiLogOut className="mr-2 text-3xl   " />Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  )
}

export default SiderBarAppProfesor
