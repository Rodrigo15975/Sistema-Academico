import { Routes, Route } from "react-router-dom";
import { PageHome, PageDashBoard } from "../Pages/ExportPages";
import stateAuthLogin from "../StatesGlobals/LoginHome/StateGlobalLoginHome";
import { Navigate } from "react-router-dom";
import { AulasProfesor, InstituciónProfesor, PerfilProfesor } from "../Pages/PageProfesores/exportPagesProfesores";
import LayoutProfesor from "../Layout/LayoutProfesor";



const Router = () => {
  const { profesorAuthData} = stateAuthLogin();


return (
  <Routes>
    {/* Page Principal */}
    <Route path="/" element={<PageHome />} />
    <Route path="/dashboard" element={profesorAuthData ? (<PageDashBoard />) : (<Navigate to={"/"} replace={true} />)} />
    {/*Profesores  */}
    <Route path="/institucionProf" element={profesorAuthData ? <LayoutProfesor><InstituciónProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
    <Route path="/perfilProf" element={profesorAuthData ? <LayoutProfesor><PerfilProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
    <Route path="/aulasProf" element={profesorAuthData ? <LayoutProfesor> <AulasProfesor /></LayoutProfesor> : <Navigate to={"/"} replace={true} />} />
    {/*Admins  */}
  </Routes>
);
};

export default Router;
