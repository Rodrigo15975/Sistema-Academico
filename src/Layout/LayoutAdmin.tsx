import SiderBarAppAdmin from "../Components/SiderBarAdmin/SiderBarAppAdmin"

const LayoutAdmin = ({ children }: LayoutAdmin) => {
  return (
    <main className="flex" >
      <SiderBarAppAdmin />
      {children}
    </main>
  )
}

export default LayoutAdmin
