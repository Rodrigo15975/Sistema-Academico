interface PropsTemplateMatricula {
  options: {
    id: string,
    name: string,
    icon: React.ReactNode
    styleClass: string
    logo: string
  }
  onClicked: () => void
}

const TemplateMatriculas = ({ options, onClicked }: PropsTemplateMatricula) => {

  const { icon, id, name, styleClass, logo } = options
  return (
    <div key={id} onClick={onClicked} className={`relative ${styleClass} shadow-xl flex items-center justify-center shadow-black/20 hover:-translate-y-4 transition hover:shadow-none cursor-pointer flex-[0_1_33.75rem] min-h-[43rem] bg-white`}>
      <img src={logo} alt="" className="absolute h-[7rem] w-[7rem] -right-2 -top-10 bg-white border rounded-full" />
      <div className="flex-[0_1_25rem] min-h-[5rem] flex items-center justify-center">
        <p className=" items-center justify-center text-2xl text-[#2386ff;] gap-3 flex undeline">
          {icon}
          {name}
        </p>
      </div>
    </div>
  )
}

export default TemplateMatriculas