import { BiSearch } from "react-icons/bi"
import stateMatriculados from "./stateMatriculados/stateMatriculados"

const SearchStudentMatriculados = () => {
  const { onChangeSearch } = stateMatriculados()

  const onChageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChangeSearch(value)
  }
  return (
    <div>
      <div className="relative">
        <BiSearch className="absolute right-3 text-2xl bottom-2"/>
        <input onChange={onChageValue} type="search" placeholder="DNI" className="p-2 font-titleFontLogin shadow-md transition hover:border-blue-400 w-[20rem] border-green-400/20 pl-4 rounded-3xl border outline-none" />
      </div>
    </div>
  )
}

export default SearchStudentMatriculados