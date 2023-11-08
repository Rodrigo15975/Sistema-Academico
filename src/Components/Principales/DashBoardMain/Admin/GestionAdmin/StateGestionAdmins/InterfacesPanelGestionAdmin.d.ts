
interface FnPanelGestionAdmin {
  read_DB_AdminGestion: () => Promise<void>
  updateDataAdminGestion: (data: ValuesRegisterGestionAdmin, uid: string, resetForm: () => void) => Promise<void>
  deleteAdminGestion: (uid: string) => Promise<void>
  onChangeDni: (value: string) => void
}

//Datos que obtendre del firestore 
type AdminsData = ValuesRegisterGestionAdmin & {
  uid: string
}
interface MainPanelGestionAdmin extends FnPanelGestionAdmin {
  DB_Admins: AdminsData[]
  suscribe: Unsubscribe
  search: string
}