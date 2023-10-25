import { GrClose } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import PanelAddNewProfesor from "./PanelAddNewProfesor";
import { m, useEffect } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { variantsAnimation } from "../../../../../Animations/VariantsAnimation/VariantsAnimation";
import Button from "../../../../Button";
import stateRegisterNewProfesor from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";
import ModalFetchError from "./Errors/ModalFetchError";
import { AnimatePresence } from "framer-motion";
import MessagesProfesor from "./AddAsignacionesProfesores/MessagesProfesor";
import LoadingProfesorVerifiy from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/LoadingProfesorVerifiy";
interface PropsClose {
  close: () => void;
  newProfesor: boolean
}
const AddNewProfesor = ({ close, newProfesor }: PropsClose) => {
  const { closeModalMessageError, messageError, messageErrorFetchDNI, profesorExisting, profesorExistingUpdate, successProfesor, successProfesorUpdate, loadignCreateProfesor } = stateRegisterNewProfesor();

  useEffect(() => {
    if (successProfesor) {
      const timeoutId = setTimeout(() => {
        successProfesorUpdate();
      }, 2500);
      return () => clearTimeout(timeoutId);
    }
    if (profesorExisting) {
      const timeoutId = setTimeout(() => {
        profesorExistingUpdate();
      }, 2500);
      // Limpia el efecto cancelando el timeout si las dependencias cambian antes de que se ejecute el efecto programado
      return () => clearTimeout(timeoutId);
    }

  }, [profesorExisting, profesorExistingUpdate, successProfesorUpdate, successProfesor]);
  return (
    <>
      {/* Modal principal para agregar new profesores */}
      <m.section variants={variantsAnimation} initial="initial" animate="animate" exit="exit" className={`flex justify-end fixed inset-0 z-10 backdrop-blur-sm bg-black/10`} >
        <div className={`flex-[0_1_60.5rem] ${newProfesor && "overflow-y-scroll"} bg-white relative rounded-xl`} >
          <div className="w-full bg-titleDashboards relative flex justify-between items-center rounded-md p-6" >
            <p className="text-white text-2xl font-textFontLogin items-center flex gap-2">Nuevo Profesor<FaUserGraduate /></p>
            <Button clicked={close} styleClass="absolute h-[3rem] w-[3rem] bg-white right-4 flex items-center rounded-md justify-center" >
              <GrClose className="text-3xl" />
            </Button>
          </div>
          <div className="flex-[0_1_100%]" >
            <PanelAddNewProfesor />
          </div>
        </div>
      </m.section>
      {messageErrorFetchDNI && <ModalFetchError closeModal={closeModalMessageError} textTitle={messageError} />}

      {loadignCreateProfesor && <AnimatePresence>
        <m.div variants={variantsAnimation} initial={"initial"} animate={"animate"} exit={"exit"} key={`${loadignCreateProfesor}`} className="absolute bg-black/40 drop-shadow-sm inset-0 flex items-center rounded-md shadow-xl justify-center z-50" >
          <LoadingProfesorVerifiy />
        </m.div>
      </AnimatePresence>
      }

      {successProfesor && <AnimatePresence>
        <m.div variants={variantsAnimation} initial={"initial"} animate={"animate"} exit={"exit"} key={`${successProfesor}`} className="absolute drop-shadow-sm inset-0 flex items-center rounded-md shadow-xl text-white justify-center z-50" >
          <MessagesProfesor title="Profesor creado" className="bg-green-500 p-8 rounded-md shadow-lg" />
        </m.div>
      </AnimatePresence>
      }

      {profesorExisting && <AnimatePresence>
        <m.div variants={variantsAnimation} initial={"initial"} animate={"animate"} exit={"exit"} key={`${profesorExisting}`} className="absolute drop-shadow-sm inset-0 flex items-center rounded-md shadow-xl text-white justify-center z-50" >
          <MessagesProfesor title="El Profesor ya existe" className="bg-rose-600 p-8 rounded-md shadow-lg" />
        </m.div>
      </AnimatePresence>
      }
    </>
  )
}

export default AddNewProfesor