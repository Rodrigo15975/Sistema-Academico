const Perfiles = ({ correo, date, gender, name, phone, photo, role }: PropsPerfiles) => {
  const namde = () => {
    console.log(date, gender, name, phone, role, photo, correo);
  }

  return (
    <div className="w-full flex flex-col"  >
      <div><h2 className="border p-8 text-2xl shadow-md" >Perfiles</h2></div>
      <div onClick={namde}></div>
    </div>
  )
}

export default Perfiles
