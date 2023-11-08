import { Avatar } from "@nextui-org/avatar";
import stateAuthLogin from "../../../StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome";
import statePerfil from "./StatePerfil";
import { useEffect } from "../../../ImportsDeterminadas/ImportsDeterminadas";
const Perfiles = () => {
  const { uid } = stateAuthLogin()
  const { fetchDataFromFirestoreAdmin, adminPerfil } = statePerfil()
  const { apellidos, correo, dni, nombres, role } = adminPerfil
  useEffect(() => {
    const sendUID = async () => {
      try {
        await fetchDataFromFirestoreAdmin(uid);
      } catch (error) {
        if (error instanceof Error) {
          console.log(`Ocurrió un error al enviar el UID: ${error.message}`);
        } else {
          console.log(error);
        }
      }
    };
    // Llama a la función sendUID solo una vez cuando el componente se monta
    sendUID();
  }, [fetchDataFromFirestoreAdmin, uid]);

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
            <div className="border hover:bg-blue-500/10 transition duration-200 border-blue-500/30 pt-4 pb-4 text-blue-500  mt-2 rounded-md"><p className="pl-4">DNI: <span className="text-black/60" >{dni}</span> </p></div>
            <div className="border hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Email: <span className="text-black/60" >{correo}</span> </p> </div>
            <div className="border hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Nombre: <span className="text-black/60" >{nombres}</span> </p> </div>
            <div className="border  hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Apellidos: <span className="text-black/60" >{apellidos}</span> </p></div>
            <div className="border  hover:bg-blue-500/10 transition duration-200 pb-4 pt-4 border-blue-500/30 text-blue-500 rounded-md mt-2 " ><p className="pl-4" >Role: <span className="text-black/60" >{role}</span> </p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfiles
