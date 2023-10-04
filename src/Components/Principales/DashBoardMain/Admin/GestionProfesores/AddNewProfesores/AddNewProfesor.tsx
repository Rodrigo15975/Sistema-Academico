import { GrClose } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import PanelAddNewProfesor from "./PanelAddNewProfesor";
import { m } from "../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { variantsAnimation } from "../../../../../Animations/VariantsAnimation/VariantsAnimation";
import Button from "../../../../Button";
import stateRegisterNewProfesor from "../../../../../StatesGlobals/StateGlobalsDashAdmin/StateRegisterNewProfesor/StateRegisterNewProfesor";
import ModalFetchError from "./Errors/ModalFetchError";
interface PropsClose {
  close: () => void;
  newProfesor: boolean
}
const AddNewProfesor = ({ close, newProfesor }: PropsClose) => {
  const { closeModalMessageError, messageError, messageErrorFetchDNI } = stateRegisterNewProfesor();
  return (
    <>
      {/* Modal principal para agregar new profesores */}
      <m.section variants={variantsAnimation} initial="initial" animate="animate" exit="exit" className={`flex justify-end fixed inset-0 backdrop-blur-sm bg-black/10`} >
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
      {messageErrorFetchDNI && <ModalFetchError closeModal={closeModalMessageError} textTitle={messageError} />   }
    </>
  )
}

export default AddNewProfesor