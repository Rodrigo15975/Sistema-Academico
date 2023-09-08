import { Field } from "formik";
import { PropsInputsFormLogin } from "./InterfacesInputs";

const InputsFormLogin = ({
  fieldProps,
  touched,
  errors,
  type,
  name,
  className,
  textPlaceHolder
}: PropsInputsFormLogin) => {
  //Funcion que válida el campo de los inputs
  const getFieldClass = (
    touched: { [key: string]: boolean },
    errors: { [key: string]: string },
    name: string
  ) => {
    if (touched[name] && errors[name]) return "form-field error";
    else if (touched[name] && !errors[name]) return "form-field value";
    else return "form-field";
  };

  return (
    <div className={className}>
      <div className={getFieldClass(touched, errors, name)}>
        <div className="flex flex-col mt-[1rem]  font-titleFontLogin  ">
          {/* <label
            className=" w-full font-medium   text-gray-600"
            htmlFor={name}
          >
            {label}
          </label> */}
          <Field
            className={` ${touched[name] ? "border-red-600 ": "" }  w-full pl-[1rem] text-[0.9rem] font-extrabold  border rounded-md outline-none h-[3rem]`}
            {...fieldProps(name)}
            type={type}
            name={name}
            id={name}
            placeholder={textPlaceHolder}
          />
          {touched[name] && errors[name] && (
            <div className=" text-red-700/80 font-semibold ">
              {errors[name]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputsFormLogin;