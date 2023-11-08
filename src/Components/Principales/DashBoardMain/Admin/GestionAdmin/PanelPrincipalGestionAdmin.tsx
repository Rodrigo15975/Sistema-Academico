import AddBtnGestionAdmint from "./AddBtnGestionAdmint"
import PanelGestionAdmins from "./PanelGestionAdmins"
import SearchAdminGestion from "./SearchAdminGestion"

const PanelPrincipalGestionAdmin = () => {
  return (
    <section className="flex flex-col gap-5 w-full min-h-[7rem">
      <article className="flex p-4 justify-between w-full items-center border-t rounded-2xl shadow-md">
        <SearchAdminGestion />
        <AddBtnGestionAdmint />
      </article>
      <div className="px-4 py-2 bg-titleDashboards rounded-2xl text-2xl text-center">
        <p>Lista de Adminstradores</p>
      </div>
      <article className="p-4 w-full rounded-2xl flex items-center justify-center border-t shadow-md min-h-[40rem]">
        <PanelGestionAdmins />
      </article>
    </section>
  )
}

export default PanelPrincipalGestionAdmin
