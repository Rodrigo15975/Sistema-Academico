import { Avatar } from "@nextui-org/avatar";

const Perfiles = ({ correo, date, gender, name, phone, photo, role }: PropsPerfiles) => {

  return (
    <div className="w-full flex flex-col"  >
      <div>
        <p className="p-8 text-2xl bg-titleDashboards text-white" >Perfil</p>
      </div>
      <div className="w-full flex-[0_1_100%] flex flex-col animate-fade animate-once animate-delay-200 animate-ease-in-out">
        <div className="flex-[0_1_30%] mt-3 flex">
          <div className="w-full flex justify-center items-center">
            <div className="flex-[0_1_12rem] h-[12rem] rounded-full" onClick={() => console.log(correo, date, gender, name, phone, photo, role)}>
              <Avatar className="h-full w-full  bg-[#006FFF] text-white" />
            </div>
          </div>
        </div>
        <div className="flex-[0_1_70%] mt-3">
         
        </div>
      </div>
    </div>
  )
}

export default Perfiles
