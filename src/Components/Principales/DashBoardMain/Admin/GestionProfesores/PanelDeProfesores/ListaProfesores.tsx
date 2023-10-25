import stateListaPanelProfesores from "../../../../../StatesGlobals/StateListaPanelProfesores/StateListaPanelProfesores"
import CardProfesores from "./CardProfesores"
import ListaVacia from "./ListaVacia";
import { collection, where, onSnapshot, query } from "firebase/firestore";
import { dbFire } from "../../../../../../firebase/Config/firestore";
import { useEffect } from "react";
const ListaProfesores = () => {
  const { listaDeProfesoresDB, getDataListProfesor, loadingList } = stateListaPanelProfesores();

  useEffect(() => {
    const q = query(collection(dbFire, "profesores"), where("role", "==", "PROFESOR"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newProfesoresData: GetDataListaProfesores[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        idDoc: doc.id,
      })) as GetDataListaProfesores[];
      getDataListProfesor(newProfesoresData)
    });

    //Limpiamos el estado, para que solo se ejecute una vez
    return () => unsubscribe();
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
            : <ListaVacia />
      }
    </>
  )
}

export default ListaProfesores
