import { Button } from "@nextui-org/button"
import { AnimatePresence, m } from "framer-motion"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { variantsAnimation } from "../../Animations/VariantsAnimation/VariantsAnimation";

const HorarioClases = ({ closeModal }: PropsModalClases) => {
  return (
    <AnimatePresence>
      <m.div key={"modal-horario"} variants={variantsAnimation} initial="initial" animate="animate" exit="exit" className=" bg-black/20 fixed backdrop-blur-sm inset-0 flex justify-center items-center z-40 "  >
        <div className="flex-[0_1_90rem] p-[3rem] min-h-[50rem] bg-white border shadow-xl rounded-3xl relative  " >
          <h1  >Horario</h1>
          <Button onClick={closeModal} className="bg-black/80 text-xl absolute right-3 top-3 w-[10rem]  text-colorGreen" >
            <AiOutlineArrowLeft /> Cerrar
          </Button>
        </div>
      </m.div>
    </AnimatePresence>
  )
}

export default HorarioClases
