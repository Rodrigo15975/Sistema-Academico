import ListaGestionAdmin from "./ListaGestionAdmin";
import statePanelGestionAdmin from "./StateGestionAdmins/statePanelGestionAdmin"
import { useEffect, useState } from 'react';


const PanelGestionAdmins = () => {
  const { read_DB_AdminGestion, DB_Admins, search, } = statePanelGestionAdmin()
  const [listDniFiltered, setListDniFiltered] = useState<AdminsData[]>([]);

  useEffect(() => {
    read_DB_AdminGestion()
  }, [read_DB_AdminGestion, DB_Admins, search]);

  useEffect(() => {
    // Filtra la lista de administradores por DNI cuando el valor de búsqueda cambia
    const filteredAdmins = DB_Admins.filter(admin => admin.dni.includes(search));

    setListDniFiltered(filteredAdmins);
  }, [search, DB_Admins]);



  return (
    <div className="flex flex-wrap gap-4 justify-center p-4 w-full min-h-[40rem]">
      {listDniFiltered.map(admins => <ListaGestionAdmin key={admins.uid} data={admins} />)}
    </div>
  )
}

export default PanelGestionAdmins