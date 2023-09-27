import { BiLogOut } from "react-icons/bi"
import stateAuthLogin from "../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome"
import SiderBarAdmin from "./SiderBarAdmin"
import { m } from "framer-motion";
const SiderBarAppAdmin = () => {
  const { logoutUser } = stateAuthLogin()
  return (
    <>
      <div className="flex flex-col justify-between gap-3 py-4 flex-[0_0_18.125rem] min-h-[100vh] bg-[#181717] " >
        <div className="flex-[0_1_5rem] border-b border-white/20 text-white text-center flex items-center justify-center text-2xl" >
          <p>Academy</p>
        </div>
        <div className="flex-[0_1_46.5rem]" >
          <SiderBarAdmin />
        </div>
        <div className="flex-[0_1_3rem] mt-4 p-2" >
          <m.button initial onClick={logoutUser} className="bg-white/10 flex items-center text-white transition hover:bg-blue-600 justify-center w-full min-h-[2.5rem] text-1xl rounded-3xl">
            <BiLogOut className="mr-2 text-3xl" />Cerrar Sesión
          </m.button>
        </div>
      </div>
    </>
  )
}

export default SiderBarAppAdmin
