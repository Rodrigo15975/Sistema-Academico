import { RxDashboard } from "react-icons/rx"
import PanelAdmin from "./PanelAdmin/PanelAdmin"

const DashBoardAdmin = () => {
 
  return (
    <section className="flex w-full flex-col" >
      <div className="flex justify-between bg-titleDashboards text-2xl p-8" >
        <p className="flex items-center gap-2 text-white">Dashboard Admin
          <RxDashboard />
        </p>
      </div>  
      <div>
        <PanelAdmin />
      </div>
    </section>
  )
}
// 4297ff

export default DashBoardAdmin