import { GoIssueClosed } from "react-icons/go";

interface PropsModal {
  textTitle: string;
  primerParrafo: string;
  segundoParrafo: string;
  tercerParrafo?: string
  closeModal: () => void
}

const ModalErrorsLogin = ({
  textTitle,
  primerParrafo,
  segundoParrafo,
  tercerParrafo,
  closeModal
}: PropsModal) => {
  return (
    <div className=" p-2 fixed  inset-0 z-10 backdrop-blur-md flex justify-center items-center">
      <div className=" p-4 relative bg-white shadow-2xl rounded-lg flex-[0_1_25em] min-h-[10rem]">
        <p className=" text-rose-700 font-extrabold font-titleFontLogin text-3xl">
          {textTitle}
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          <li className=" ml-3 relative before:absolute before:h-[.7rem] before:w-[.7rem] before:bg-green-400 before:-left-[1.1rem] before:bottom-1 before:rounded-full font-medium text-red-950 ">
            {primerParrafo}
          </li>
          <li className=" ml-3 relative before:absolute before:h-[.7rem] before:w-[.7rem] before:bg-green-400 before:-left-[1.1rem] before:bottom-1 before:rounded-full font-medium text-red-950 ">
            {segundoParrafo}
          </li >
          {
            tercerParrafo && <li className=" ml-3 relative before:absolute before:h-[.7rem] before:w-[.7rem] before:bg-green-400 before:-left-[1.1rem] before:bottom-1 before:rounded-full font-medium text-red-950 " >
              {tercerParrafo}
            </li>
          }

        </ul>
        <button
          className=" hover:scale-105 transition absolute flex items-center text-3xl text-white font-extrabold justify-center -top-2 -right-2 rounded-md z-10 bg-green-400 h-[2.5rem] w-[2.5rem] "
          type="button"
          onClick={closeModal}
        >
          <GoIssueClosed />
        </button>
      </div>
    </div>
  );
};

export default ModalErrorsLogin;
