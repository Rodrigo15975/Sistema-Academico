import { Routes, Route } from "react-router-dom";
import { PageHome } from "../Pages/ExportPages";

const Router = () => {
  return (
    <Routes>
      {/* Page Principal */}
      <Route path="/" element={<PageHome />} />
    </Routes>
  );
};

export default Router;
