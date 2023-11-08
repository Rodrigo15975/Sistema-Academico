import { BiSolidBookContent } from "react-icons/bi"
import AddNewCursosGestion from "./AddNewCursosGestion"
import PanelGestionCursos from "./PanelGestionCursos"
import { MdAddToQueue } from "react-icons/md"
import stateGestionCursos from "./stateGestionCursos/stateGestionCursos"
import TemplateModalMessage from "../../../../TemplateModalMessage"
import { useEffect } from 'react';

const AppGestionCursos = () => {
  const { setLoadingCreateCurso, cursoExisting, setCursoExisting, loadignCreateCurso, openAddCursos, setOpenAddCursos } = stateGestionCursos()

  useEffect(() => {
    const idTime = setTimeout(() => {
      if (loadignCreateCurso && openAddCursos) return (setLoadingCreateCurso(), setOpenAddCursos());
    }, 2500);
    const idTimeTwo = setTimeout(() => {
      if (cursoExisting) return (setCursoExisting());
    }, 2500);

    return () => (clearInterval(idTime), clearInterval(idTimeTwo))
  }, [setLoadingCreateCurso, loadignCreateCurso, openAddCursos, setOpenAddCursos, setCursoExisting, cursoExisting]);
  return (
    <article className="flex flex-col w-full" >
      <div className="p-8 text-2xl text-white bg-titleDashboards">
        <p className=" flex items-center gap-4">Nuevo Cursos
          <BiSolidBookContent />
        </p>
      </div>
      <div className="flex items-center justify-end p-4 ">
        <AddNewCursosGestion />
      </div>
      <div className="p-4 flex items-center justify-center text-2xl ">
        <p className="bg-titleDashboards flex items-center justify-center gap-4 font-extrabold w-full text-center py-2">
          Lista de Cursos
          <MdAddToQueue className="text-3xl" />
        </p>
      </div>
      <section className="flex items-center justify-center p-4">
        <PanelGestionCursos />
      </section>
      {loadignCreateCurso &&
        <TemplateModalMessage text="" className="fixed z-[100] animate-fade animate-once inset-0 bg-white/90 flex items-center justify-center shadow-lg" classNameChildren="" >
          <span className="p-4 bg-green-400 rounded-md shadow-md">Curso creado..</span>
        </TemplateModalMessage>
      }
      {cursoExisting &&
        <TemplateModalMessage text="" className="fixed z-[100] animate-fade animate-once inset-0 bg-rose-500/90 flex items-center justify-center shadow-lg" classNameChildren="" >
          <span className="p-4 bg-white rounded-md shadow-md ">Curso Existente.</span>
        </TemplateModalMessage>
      }
    </article>
  )
}

export default AppGestionCursos