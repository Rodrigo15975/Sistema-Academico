import { LiaUniversitySolid } from "react-icons/lia"
import CardsInstitucion from "./CardsInstitucion"
const Institucion = () => {
  return (
    <div className="w-full flex flex-col bg-institucion">
      <div className="mb-4">
        <p className="bg-titleDashboards p-8 flex items-center gap-2 text-2xl shadow-md text-white" >
          I. E. Privada Academy
          <LiaUniversitySolid className="text-3xl" />
        </p>
      </div>
      <div className="text-center my-4 text-3xl text-black/50">
        <p>Infraestructura y Eventos anuales</p>
      </div>
      <div className="flex items-center justify-center flex-[0_1_20rem] px-5">
        <div className="flex gap-4 justify-center items-start  flex-[0_1_90rem] min-h-[22rem] p-4">
          <CardsInstitucion title="Laboratorios de Informática" img="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <CardsInstitucion title="Aulas Interactivas" img="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <CardsInstitucion title="Tecnología Educativa" img="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-[0_1_20rem] px-5">
        <div className="flex gap-4 justify-center items-start  flex-[0_1_90rem] min-h-[22rem] p-4">
          <CardsInstitucion title="Olimpiadas Tecnológicas" texto="Más allá de la competencia, este evento es un foro donde las ideas convergen y la colaboración florece. Los participantes tendrán la oportunidad de establecer contactos, compartir conocimientos y fomentar alianzas estratégicas que impulsarán aún más el progreso tecnológico. Las Olimpiadas Tecnológicas 2023 representan un testimonio de la pasión global por la tecnología y el deseo de dar forma al futuro a través de la innovación." img="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <CardsInstitucion title="Feria Educativa" texto="es una ventana a un mundo de oportunidades y conocimientos. En este emocionante escaparate de la educación, estudiantes, padres, educadores y profesionales se reúnen para descubrir las últimas tendencias, programas académicos innovadores y recursos educativos de vanguardia." img="https://images.unsplash.com/photo-1523473125050-1c9405e8b208?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <div className="flex justify-center gap-3 flex-wrap items-center flex-[0_1_40rem] px-4">
        <div className="hover:-translate-y-2 transition duration-400 flex-[0_1_21.2rem] min-h-[35rem] border shadow-md rounded-md border-blue-500/30 ">
          <div className="bg-titleDashboards text-white p-2 text-2xl font-titleFontLogin mb-4">
            <p>Reseña Historica</p>
          </div>
          <div className="bg-white flex flex-col gap-3 p-2 text-black/60">
            <p className="px-2">Hace varias décadas, en una pintoresca localidad,
              se fundó la "I. E. Privada Academy" con un propósito
              claro: brindar una educación excepcional a los estudiantes de secundaria
            </p>
            <p className="px-2">
              La historia de esta academia comenzó en los años 80, cuando un grupo de educadores visionarios, padres preocupados y empresarios locales se unieron para crear una institución que trascendiera los estándares educativos tradicionales.
            </p>
            <p className="px-2">
              extracurriculares, como clubes, deportes y eventos culturales. La escuela ha producido numerosos líderes, artistas, deportistas y profesionales exitosos que han dejado su huella en la sociedad.
            </p>
          </div>
        </div>
        <div className="hover:-translate-y-2 transition duration-400 flex-[0_1_21.2rem] min-h-[35rem] border shadow-md rounded-md border-blue-500/30 ">
          <div className="bg-titleDashboards text-white p-2 font-titleFontLogin mb-4 text-2xl">
            <p>Niveles Académicos</p>
          </div>
          <div className="bg-white flex flex-col gap-3">
            <div className="flex-[0_1_5rem] px-2">
              <p className="px-2 border-b border-blue-500/30 text-[1rem] text-blue-600/50">Inicial</p>
              <p className="px-2 text-black/50">La educación inicial es la primera etapa de la educación formal y está diseñada para niños en edad preescolar, generalmente de 3 a 5 años.</p>
            </div>
            <div className="flex-[0_1_5rem] px-2">
              <p className="px-2 border-b border-blue-500/30 text-[1rem] text-blue-600/50">Primaria</p>
              <p className="px-2 text-black/50">En esta etapa, se establecen las bases de conocimientos en áreas como matemáticas, ciencias, lectura y escritura</p>
            </div>
            <div className="flex-[0_1_5rem] px-2">
              <p className="px-2 border-b border-blue-500/30 text-[1rem] text-blue-600/50">Secundaria</p>
              <p className="px-2 text-black/50">Se profundiza en el conocimiento y se ofrecen materias más especializadas en áreas como ciencias, humanidades y artes.</p>
            </div>
            <div className="flex-[0_1_5rem] px-2">
              <p className="px-2 border-b border-blue-500/30 text-[1rem] text-blue-600/50">Ceba</p>
              <p className="px-2 text-black/50">Ofrece la oportunidad de adquirir el certificado de educación básica (primaria y secundaria) a aquellos que no pudieron hacerlo en su momento.</p>
            </div>
          </div>
        </div>
        <div className="hover:-translate-y-2 transition duration-400 flex-[0_1_21.2rem] min-h-[35rem] border shadow-md rounded-md border-blue-500/30 ">
          <div className="bg-titleDashboards text-white p-2 font-titleFontLogin mb-4 text-2xl">
            <p>Misión</p>
          </div>
          <div className="bg-white flex flex-col gap-3 px-2 text-black/50">
            <p className="px-2 ">Brindar una educación de calidad que fomente el pensamiento crítico, la creatividad y la resolución de problemas.</p>
            <p className="px-2 ">Cultivar un ambiente inclusivo y diverso que promueva el respeto, la empatía y la tolerancia entre todos los miembros de nuestra comunidad.</p>
            <p className="px-2 ">Inspirar el liderazgo y el compromiso cívico, alentando a nuestros estudiantes a ser ciudadanos responsables y contribuir positivamente a la sociedad.</p>
          </div>
        </div>
        <div className="hover:-translate-y-2 transition duration-400 flex-[0_1_21.2rem] min-h-[35rem] border shadow-md rounded-md border-blue-500/30 ">
          <div className="bg-titleDashboards text-white p-2 font-titleFontLogin mb-4 text-2xl">
            <p>Valores</p>
          </div>
          <div className="bg-white flex flex-col gap-3 px-2 text-black/50">
            <p className="px-2"><span className="text-blue-600 font-titleFontLogin underline underline-offset-2">Excelencia:</span> Buscamos la excelencia en todo lo que hacemos, alentando a nuestros estudiantes a esforzarse por su máximo potencial y a nunca dejar de aprender.
            </p>
            <p className="px-2"><span className="text-blue-600 font-titleFontLogin underline underline-offset-2">Innovación:</span> Estamos comprometidos con la innovación en la educación, adoptando enfoques creativos y tecnológicos para mejorar el aprendizaje y el desarrollo de habilidades.</p>
            <p className="px-2"><span className="text-blue-600 font-titleFontLogin underline underline-offset-2">Compromiso:</span> Nuestro compromiso con la educación va más allá del aula; nos esforzamos por empoderar a nuestros estudiantes para que sean agentes de cambio y líderes en sus comunidades.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Institucion
{/* <CardsInstitucion texto={"reconocemos la importancia de mantenernos a la vanguardia de la tecnología educativa para brindar a nuestros estudiantes una experiencia de aprendizaje excepcional. Dos componentes clave de nuestra estrategia tecnológica son nuestras aulas interactivas y nuestros modernos laboratorios de informática."} title="Laboratorios de Informática"  img="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
<CardsInstitucion texto={"Nuestras aulas interactivas son espacios de aprendizaje dinámicos que han sido diseñados para fomentar la participación activa y la colaboración entre estudiantes y profesores. Cada aula está equipada con pizarras digitales, sistemas de proyección avanzados y tecnología de sonido de alta calidad. "} title="Aulas Interactivas" img="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
<CardsInstitucion texto={"Nuestros laboratorios de informática son verdaderos centros de innovación y exploración tecnológica. Están equipados con computadoras de última generación y software especializado para una variedad de disciplinas."} title="Tecnología Educativa"  img="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
