import { Avatar } from "@nextui-org/avatar";

const Perfiles = ({ correo, date, gender, name, phone, photo, role }: PropsPerfiles) => {
  const namde = () => {
    console.log(date, gender, name, phone, role, photo, correo);
  }

  return (
    <div className="w-full flex flex-col"  >
      <div>
        <p className="p-8 text-2xl bg-titleDashboards text-white" >Perfil</p>
      </div>
      <div className="w-full flex-[0_1_100%] flex flex-col animate-fade animate-once animate-delay-200 animate-ease-in-out">
        <div className="flex-[0_1_30%] mt-3 flex">
          <div className="w-full flex justify-center items-center">
            <div className="flex-[0_1_12rem] h-[12rem] rounded-full">
              <Avatar className="h-full w-full  bg-[#4294FF] text-white" />
            </div>
          </div>
        </div>
        <div className="flex-[0_1_70%] mt-3">
          <div className="bg-[#006FFF]/20 text-[#006aff] min-h-[5rem] text-center flex items-center justify-center text-xl">
            <p>Información Básica</p>
          </div>
          <div className="min-h-[57vh] mt-3 flex flex-col justify-between">
            <div className="flex-[0_1_20rem] bg-white flex-col flex justify-center items-center">
              <div className="flex w-full justify-center items-center border-t border-[#157AFF]/30 min-h-[4rem]">
                <p className="border-r border-[#157AFF]/10 flex-[0_1_20rem] h-full flex items-center justify-start pl-3 text-[#3300ff] pr-3">Nombre:</p>
                <p className="flex-[0_1_20rem] pl-8 underline">Rodrigo</p>
              </div>
              <div className="flex w-full justify-center items-center border-t border-[#157AFF]/30 min-h-[4rem]">
                <p className="border-r border-[#157AFF]/10 flex-[0_1_20rem] h-full flex items-center justify-start pl-3 text-[#3300ff]">Apellidos:</p>
                <p className="flex-[0_1_20rem] pl-8 underline">Rumpler Braun</p>
              </div>
              <div className="flex w-full justify-center items-center border-t border-[#157AFF]/30 min-h-[4rem]">
                <p className="border-r border-[#157AFF]/10 flex-[0_1_20rem] h-full flex items-center justify-start pl-3 text-[#3300ff]">Usuario:</p>
                <p className="flex-[0_1_20rem] pl-8 underline">Admin</p>
              </div>
              <div className="flex w-full justify-center items-center border-t border-b border-[#157AFF]/30 min-h-[4rem]">
                <p className="border-r border-[#157AFF]/10 flex-[0_1_20rem] h-full flex items-center justify-start pl-3 text-[#3300ff]">Correo:</p>
                <p className="flex-[0_1_20rem] pl-8 underline">Rodrigo@hotmail.com</p>
              </div>
            </div>
            <div className="flex-[0_1_14rem] bg-titleDashboards"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfiles
