import { useState } from "react";
import stateAuthLogin from "../../../../StatesGlobals/LoginHome/StateGlobalLoginHome";
import { Avatar } from "@nextui-org/avatar";
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
      <div className="flex" >
        <div className="flex gap-2 " >
          <p className="text-lg" >{profesorAuthData?.name.toLocaleUpperCase()}</p>
          <Avatar size="lg" onClick={openEditProfile} className="cursor-pointer outline-double h-[2rem] w-[2rem] text-b text-white bg-black" src="" alt="profile" />
        </div>
      </div>
    </>
  )
}

export default ProfileAdmin