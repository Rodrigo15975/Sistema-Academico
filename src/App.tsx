import Router from "./Router/Router";
import "./App.css";
import stateListaPanelProfesores from "./Components/StatesGlobals/StateListaPanelProfesores/StateListaPanelProfesores";
import { useEffect } from "react";
function App () {
  const { getDataListProfesor}= stateListaPanelProfesores()
  useEffect(() => {
    getDataListProfesor()
  }, [getDataListProfesor]);
  return (
    <>
      <Router />
    </>
  );
}
export default App;
