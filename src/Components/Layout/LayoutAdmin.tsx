import SiderBarAppAdmin from "../SiderBars/SiderBarAdmin/SiderBarAppAdmin"

const LayoutAdmin = ({ children }: LayoutProps ) => {
  return (
    <main className="flex" >
      <SiderBarAppAdmin />
      {children}
    </main>
  )
}

export default LayoutAdmin
