import { GiBookPile } from "react-icons/gi";
const ListaVacia = () => {
  return (
    <div>
      <p className="flex items-center justify-center bg-titleDashboards text-xl p-2 shadow-lg gap-2 text-white rounded-lg">
        Lista vacia <GiBookPile className="text-3xl" />
      </p>
    </div>
  )
}

export default ListaVacia
