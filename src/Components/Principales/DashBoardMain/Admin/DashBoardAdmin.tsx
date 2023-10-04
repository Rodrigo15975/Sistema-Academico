import { RxDashboard } from "react-icons/rx"
import PanelAdmin from "./PanelAdmin/PanelAdmin"
import ProfileAdmin from "./Profile/ProfileAdmin"


const DashBoardAdmin = () => {

  return (
    <section className="flex w-full flex-col">
      <div className="flex justify-between text-2xl p-8 bg-titleDashboards " >
        <p className="flex items-center gap-2 text-white">Dashboard Admin
          <RxDashboard />
        </p>
        <ProfileAdmin />
      </div>
      <div>
        <PanelAdmin />
      </div>
    </section>
  )
}
// 4297ff

export default DashBoardAdmin