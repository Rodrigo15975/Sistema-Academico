import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// PageProfesores
import LayoutProfesor from "../Components/Layout/LayoutProfesor";
import { PageAulasProfesor, PageDashBoardProfesor, PageInstitucionProfesor, PagePerfilProfesor } from "../Components/Pages/Dashboard/Profesor/exportPagesProfesores";
//-------
import { PageHome, } from "../Components/Pages/ExportPages";
// PageAdminds
import { PageAddNewCursos, PageMatriculas, PageAdminPerfil, PageDashBoardAdmin, PageGestionEstudiantes, PageInstitucionAdmin, PageGestionProfesores } from "../Components/Pages/Dashboard/Admin/ExportPagesAdmin";
import LayoutAdmin from "../Components/Layout/LayoutAdmin";
//------
import stateAuthLogin from "../Components/StatesGlobals/StateGlobalsLoginHome/StateGlobalLoginHome";
import PageListEstudiantes from "../Components/Pages/Dashboard/Admin/PageListEstudiantes";
import PageAddNewAdmin from "../Components/Pages/Dashboard/Admin/PageAddNewAdmin";
const Router = () => {
  const { profesorAuthData, adminAuthData } = stateAuthLogin();
  return (
    <Routes>
      {/* Page Principal */}
      <Route path="/" element={<PageHome />} />
      {/*Profesores  */}
      <Route path="/dashboard-profesor" element={<LayoutProfesor><PageDashBoardProfesor /></LayoutProfesor> } />
      <Route path="/dashboard/profesor/institucion" element={profesorAuthData ? <LayoutProfesor><PageInstitucionProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/profesor/perfil" element={profesorAuthData ? <LayoutProfesor><PagePerfilProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/profesor/aulas" element={profesorAuthData ? <LayoutProfesor> <PageAulasProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
      {/*Admins  */}
      <Route path="/dashboard-admin" element={ <LayoutAdmin> <PageDashBoardAdmin /></LayoutAdmin> } />
      <Route path="/dashboard/admin/perfil" element={adminAuthData ? <LayoutAdmin> <PageAdminPerfil /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/admin/institucion" element={adminAuthData ? <LayoutAdmin><PageInstitucionAdmin /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/admin/gestionEstudiantes" element={adminAuthData ? <LayoutAdmin> <PageGestionEstudiantes /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/admin/gestionProfesores" element={adminAuthData ? <LayoutAdmin> <PageGestionProfesores /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/admin/add-cursos" element={adminAuthData ? <LayoutAdmin> <PageAddNewCursos /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/admin/matriculas" element={adminAuthData ? <LayoutAdmin> <PageMatriculas /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      {/* <Route path="/dashboard/admin/reporte" element={adminAuthData ? <LayoutAdmin> <PageReporte /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} /> */}
      <Route path="/dashboard/admin/add-admin" element={adminAuthData ? <LayoutAdmin> <PageAddNewAdmin /></LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="/dashboard/admin/lista-estudiantes" element={adminAuthData ? <LayoutAdmin> <PageListEstudiantes /> </LayoutAdmin> : <Navigate to={"/"} replace={true} />} />
      <Route path="*" element={<h2>Te perdiste?</h2>} />
    </Routes>
  );
};

export default Router;
