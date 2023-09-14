import { useState } from "react";
import stateAuthLogin from "../../../../StatesGlobals/LoginHome/StateGlobalLoginHome";
import { Avatar } from "@nextui-org/avatar";
import { FiEdit2 } from "react-icons/fi";
import EditProfileModalAdmin from "./EditProfileModalAdmin";

const ProfileAdmin = () => {
  const { profesorAuthData } = stateAuthLogin()
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const openEditProfile = () => setOpenEdit(!openEdit);
  return (
    <>
      {openEdit &&
        <EditProfileModalAdmin updateState={openEditProfile} />
      }
      <div className="flex flex-col gap-3  font-titleFontLogin  " >
        <div className="text-colorGreen  pl-4 pr-4 border-b border-white/30  mb-4 pb-3 text-3xl  " >
          <h1 className="text-center " >Academy</h1>
        </div>
        <div className="flex mt-[2rem]  flex-col items-center  gap-2 " >
          <div className="w-[6.75rem]  h-[6.75rem] relative  " >
            <div onClick={openEditProfile} className="text-black text-xl  absolute -right-3  cursor-pointer -top-7  z-0 rounded-full  bg-white  p-2" >
              <FiEdit2 />
            </div>
            <Avatar size="lg" className=" h-full w-full  text-b  bg-white" src="" alt="profile" />
          </div>
          <p className=" pl-2 text-xl text-colorGreen font-textFontLogin " > <span className="text-white/80" >{profesorAuthData?.role.toLocaleUpperCase()}: </span> {profesorAuthData?.name.toLocaleUpperCase()}</p>
        </div>
      </div>
    </>
  )
}

export default ProfileAdmin