
interface PropsListCompleta {
  data: AsignacionesProfesor
}

const ListCompleteData = ({ data }: PropsListCompleta) => {
  const { curso, dia, grado, horario, seccion } = data
  return (
    <div className="border border-blue-500/30 hover:-translate-y-1 hover:bg-blue-400/20 font-titleFontLogin  hover:shadow-none duration-200 transition  shadow-md flex flex-col p-3 mt-4 rounded-tr-2xl rounded-bl-2xl">
      <p className="text-blue-400">Curso:
        <span className="text-black/60">{curso}</span>
      </p>
      <p className="text-blue-400">Dia:
        <span className="text-black/60">
          {dia}
        </span>
      </p>
      <p className="text-blue-400">Grado:
        <span className="text-black/60">
          {grado}
        </span>
      </p>
      <p className="text-blue-400">Horario:
        <span className="text-black/60">
          {horario}
        </span>
      </p>
      <p className="text-blue-400">Seccion:
        <span className="text-black/60">
          {seccion}
        </span>
      </p>
    </div>
  )
}

export default ListCompleteData
