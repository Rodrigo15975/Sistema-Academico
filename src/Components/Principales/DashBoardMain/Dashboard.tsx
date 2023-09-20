// import { ChangeEvent, useEffect, useRef, useState } from "react";
import Roles from "../../Enums/Roles";
import LayoutAdmin from "../../Layout/LayoutAdmin";
import LayoutProfesor from "../../Layout/LayoutProfesor";
import { PageDashBoardAdmin } from "../../Pages/PagesAdmin/PageDashBoardAdmin";
import stateAuthLogin from "../../StatesGlobals/LoginHome/StateGlobalLoginHome";
import DashBoardProfesor from "./Profesor/DashBoardProfesor";
// import { storage, getDownloadURL, ref, uploadBytes } from "../../Config/storage";

const Dashboard = () => {
  const { profesorAuthData } = stateAuthLogin();
  // const imgH = useRef<HTMLImageElement | null>(null)
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);


  // const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     console.log(file);
  //     setSelectedFile(file)
  //   }
  // }


  // const cambiar = async () => {
  //   if (selectedFile) {
  //     try {
  //       const refStorage = ref(storage, `/profesores/${profesorAuthData?.uid}profile-profesor`)
  //       await uploadBytes(refStorage, selectedFile)
  //       const url = await getDownloadURL(refStorage)
  //       imgH.current?.setAttribute("src", url)
  //       console.log("Subido succels");

  //     } catch (error) {
  //       console.log(error);

  //     }
  //   }
  // }

  // useEffect(() => {
  //   const getPhoto = async () => {
  //     try {
  //       const refStorage = ref(storage, `/profesores/${profesorAuthData?.uid}profile-profesor`)
  //       const url = await getDownloadURL(refStorage)
  //       imgH.current?.setAttribute("src", url)

  //     } catch (error) {
  //       console.log(error);

  //     }
  //   }
  //   getPhoto()
  // }, [profesorAuthData]);

  return (
    // Renderizamos dependiendo al role, si es admin o profesor dentro del layout
    < >
      {profesorAuthData?.role === Roles.Administrador ? <LayoutAdmin><PageDashBoardAdmin /></LayoutAdmin>:<LayoutProfesor><DashBoardProfesor/></LayoutProfesor>}
    </>
  )

}

export default Dashboard
