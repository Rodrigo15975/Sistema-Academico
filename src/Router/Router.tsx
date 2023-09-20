import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// PageProfesores
import LayoutProfesor from "../Components/Layout/LayoutProfesor";
import { PageAulasProfesor, PageDashBoardProfesor, PageInstitucionProfesor, PagePerfilProfesor } from "../Components/Pages/PageProfesores/exportPagesProfesores";
//-------
import { PageDashBoard, PageHome, } from "../Components/Pages/ExportPages";
// PageAdminds
import { PageAdminPerfil, PageDashBoardAdmin, PageGestionEstudiantes, PageInstitucionAdmin, PageGestionProfesores } from "../Components/Pages/PagesAdmin/ExportPagesAdmin";
import LayoutAdmin from "../Components/Layout/LayoutAdmin";
//------
import stateAuthLogin from "../Components/StatesGlobals/LoginHome/StateGlobalLoginHome";
const Router = () => {
  const { profesorAuthData } = stateAuthLogin();
  return (
    <Routes>
      {/* Page Principal */}
      <Route path="/" element={<PageHome />} />
      <Route path="/dashboard" element={profesorAuthData ? (<PageDashBoard />) : (<Navigate to={"/"} replace={true} />)} />
      {/*Profesores  */}
      <Route path="/dashboard" element={profesorAuthData ? <LayoutProfesor><PageDashBoardProfesor/></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      <Route path="/institucionProf" element={profesorAuthData ? <LayoutProfesor><PageInstitucionProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      <Route path="/perfilProf" element={profesorAuthData ? <LayoutProfesor><PagePerfilProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      <Route path="/aulasProf" element={profesorAuthData ? <LayoutProfesor> <PageAulasProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      {/*Admins  */}
      <Route path="/dashboard" element={profesorAuthData ? <LayoutAdmin> <PageDashBoardAdmin /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/perfilAdmin" element={profesorAuthData ? <LayoutAdmin> <PageAdminPerfil /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/institucionAdmin" element={profesorAuthData ? <LayoutAdmin><PageInstitucionAdmin /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/gestionEstudiantes" element={profesorAuthData ? <LayoutAdmin> <PageGestionEstudiantes /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/gestionProfesores" element={profesorAuthData ? <LayoutAdmin> <PageGestionProfesores /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      {/* <Route path="/listadoProfesores" element={profesorAuthData ? <LayoutAdmin> <PageListadoDeProfesores /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} /> */}
      {/* <Route path="/listadoAlumnos" element={profesorAuthData ? <LayoutAdmin> <PageListadoDeAlumnos /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} /> */}
      <Route path="*" element={<h2>Te perdiste?</h2>} />
    </Routes>
  );
};

export default Router;
