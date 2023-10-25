
interface PropsCardsInstitucion {
  title: string
  img: string
  texto?: string
}

const CardsInstitucion = ({ title, img, texto }: PropsCardsInstitucion) => {
  return (
    <div className="hover:-translate-y-2 transition duration-400 bg-white flex-[0_1_30rem] min-h-[15rem] my-2 border border-[#157AFF]/30 shadow-[#157aff]/20 shadow-md">
      <div className="p-2 text-xl bg-titleDashboards text-white">
        <p>{title}</p>
      </div>
      <div className="flex max-w-full overflow-hidden h-[15rem]">
        <img className=" hover:scale-105 transition duration-200 h-full w-full object-cover" src={img} alt={title} />
      </div>
      {texto &&
        <div className="text-black/50 min-h-[15rem]">
          <p className="p-4">{texto}</p>
        </div>}
    </div>
  )
}

export default CardsInstitucion
