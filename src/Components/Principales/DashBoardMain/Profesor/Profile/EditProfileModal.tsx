import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button"
import { AnimatePresence, m } from "framer-motion"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { variantsAnimation } from "../../../../Animations/VariantsAnimation/VariantsAnimation";
type PropsModal = {
  updateState: () => void
}
const EditProfileModal: React.FC<PropsModal> = ({ updateState }) => {
  return (
    <AnimatePresence>
      <m.div variants={variantsAnimation} initial={"initial"} animate={"animate"} exit={"exit"} className=" bg-black/30 fixed flex justify-end items-center inset-0  backdrop-blur-md z-50 "    >
        <div className="bg-white h-full flex-[0_1_30rem]"  >
          <div className=" relative w-full min-h-[30rem] flex flex-col justify-center items-center  " >
            <Button className="absolute right-6 top-6 bg-bgGreen text-xl  hover:bg-bgGreen/50  " onClick={updateState} >
              <AiOutlineArrowLeft />
              Volver
            </Button>
            <div className="flex-[0_1_10rem] w-[10rem] mb-[2rem] " >
              <Avatar className="h-full w-full bg-black/50 text-white/80  border " src="" alt="profile" size="lg" />
            </div>
            <input type="file" name="" id="" />
            <Button className="bg-bgGreen mt-4 w-[8rem] hover:bg-white  hover:border"  >
              Subir
            </Button>
          </div>
        </div>
      </m.div>
    </AnimatePresence>

  )
}

export default EditProfileModal
