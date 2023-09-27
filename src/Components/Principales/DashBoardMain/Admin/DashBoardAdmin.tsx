import PanelAdmin from "./PanelAdmin/PanelAdmin"
import ProfileAdmin from "./Profile/ProfileAdmin"
const DashBoardAdmin = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="border flex justify-between text-2xl p-8 text-[#000000] shadow-md" >
        <p>Dashboard Admin</p>
        <ProfileAdmin />
      </div>
      <div className="" >
        <PanelAdmin />
      </div>
    </section>
  )
}

export default DashBoardAdmin