import { GoReport } from "react-icons/go"

const Reportes = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-white">
        <p className="bg-titleDashboards p-8 text-2xl gap-2 shadow-md flex items-center" >Reportes
          <GoReport />
        </p>
      </div>
    </div>
  )
}

export default Reportes
