import { useEffect } from "react";
import stateListaPanelProfesores from "../../../../../StatesGlobals/StateListaPanelProfesores/StateListaPanelProfesores"
import CardProfesores from "./CardProfesores"
import ListaVacia from "./ListaVacia";

const ListaProfesores = () => {
  const { listaDeProfesoresDB, getDataListProfesor, loadingList } = stateListaPanelProfesores()
  useEffect(() => {
    getDataListProfesor()
  }, [getDataListProfesor]);

  return (
    <>
      {
        loadingList ?
          <p>
            Loading....
          </p>
          : listaDeProfesoresDB.length > 0
            ? listaDeProfesoresDB.map(profesors =>
              <CardProfesores data={profesors} key={profesors.uid} />
            )
            :
            <ListaVacia />
      }
    </>
  )
}

export default ListaProfesores
