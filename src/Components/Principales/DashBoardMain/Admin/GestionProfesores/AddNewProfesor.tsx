import Button from "../../../Button"
import { GrClose } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import PanelAddNewProfesor from "./PanelAddNewProfesor";
interface PropsClose {
  close: () => void;
}
const AddNewProfesor = ({ close }: PropsClose) => {
  return (
    <section className="flex justify-end fixed inset-0 backdrop-blur-sm bg-black/40 animate-fade-left animate-duration-300 animate-ease-linear" >
      <div className="flex-[0_1_60.5rem] min-h-screen bg-white relative rounded-xl" >
        <div className="w-full min-h-[5rem] bg-[#151817] relative flex justify-between items-center rounded-md p-6" >
          <p className="text-white text-2xl font-textFontLogin flex gap-2">Nuevo Profesor<FaUserGraduate/></p>
          <Button clicked={close} styleClass="absolute h-[3rem] w-[3rem] bg-white right-4 flex items-center rounded-md justify-center" >
            <GrClose className="text-3xl" />
          </Button>
        </div>
        <div className="min-h-screen flex-[0_1_100%]" >
          <PanelAddNewProfesor />
        </div>
      </div>
    </section>
  )
}

export default AddNewProfesor