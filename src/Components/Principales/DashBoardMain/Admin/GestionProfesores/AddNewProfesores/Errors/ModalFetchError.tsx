import { variantsAnimation } from "../../../../../../Animations/VariantsAnimation/VariantsAnimation";
import { m } from "../../../../../../ImportsDeterminadas/ImportsDeterminadas";
import { GoIssueClosed } from "react-icons/go";
interface PropsModal {
  textTitle: string;
  closeModal: () => void
}
const ModalFetchError = ({
  textTitle,
  closeModal
}: PropsModal) => {
  return (
    <m.div variants={variantsAnimation} initial="initial" exit={"exit"} animate="animate" className="p-2 fixed inset-0 z-10 backdrop-blur-sm flex justify-center items-center bg-black/50">
      <div className="p-4 relative bg-white shadow-2xl rounded-lg flex-[0_1_25em] min-h-[10rem] flex justify-center items-center text-center">
        <p className="text-black text-lg">
          {textTitle}
        </p>        
        <button
          className=" hover:scale-105 transition absolute flex items-center text-3xl text-white font-extrabold justify-center -top-2 -right-2 rounded-md z-10 bg-green-400 h-[2.5rem] w-[2.5rem] "
          type="button"
          onClick={closeModal}
        >
          <GoIssueClosed />
        </button>
      </div>
    </m.div>
  );
};

export default ModalFetchError;
