import { FcSearch } from "react-icons/fc"
import statePanelGestionAdmin from "./StateGestionAdmins/statePanelGestionAdmin"

const SearchAdminGestion = () => {
  const { onChangeDni } = statePanelGestionAdmin();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChangeDni(value)
  }
  return (
    <div className="flex-[0_1_18rem] h-[2.7rem] relative flex items-center">
      <input onChange={onChange} type="search" placeholder="DNI" className="p-2 focus:bg-green-400/20 transition h-full w-full rounded-3xl border-black/50 pl-4 border outline-none shadow-md" />
      <FcSearch className="text-2xl absolute right-5" />
    </div>
  )
}

export default SearchAdminGestion
