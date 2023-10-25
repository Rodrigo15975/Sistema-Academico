import { Avatar } from "@nextui-org/avatar";

const Perfiles = () => {
  return (
    <div className="w-full flex flex-col"  >
      <div>
        <p className="p-8 text-2xl bg-titleDashboards text-white" >Perfil</p>
      </div>
      <div className="bg-institucion flex items-center justify-center w-full gap-4 min-h-[90vh] px-4">
        <div className="bg-white flex-[0_1_40rem] border min-h-[40rem] rounded-md shadow-lg border-blue-500/30 hover:-translate-y-3 transition duration-200">
          <div className="text-white bg-titleDashboards p-4 text-center text-2xl">
            <p>Información General</p>
          </div>
          <div className="flex items-center justify-center flex-[0_1_20rem] min-h-[15rem] my-4">
            <Avatar className="w-[10rem] h-[10rem] text-white bg-blue-400 border" />
          </div>
          <div className="p-4 font-titleFontLogin">
            <div className="border hover:bg-blue-500/10 transition duration-200 border-blue-500/30 pt-4 pb-4 text-blue-500  mt-2 rounded-md"><p className="pl-4">DNI: <span className="text-black/60" >70537447</span> </p></div>
            <div className="border hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Email: <span className="text-black/60" >Javierluis15975@hotmail.com</span> </p> </div>
            <div className="border hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Nombre: <span className="text-black/60" >Javier Luis</span> </p> </div>
            <div className="border  hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Apellidos: <span className="text-black/60" >Quispe Rojas</span> </p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfiles
