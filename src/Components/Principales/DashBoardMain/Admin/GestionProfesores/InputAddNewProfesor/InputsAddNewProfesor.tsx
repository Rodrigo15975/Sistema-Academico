import { Field } from "formik";
import { PropsInputsAddNewProfesor } from "./InterfacesInputs";
const InputsAddNewProfesor = ({
  fieldProps,
  touched,
  errors,
  type,
  name,
  className,
  textPlaceHolder,
  label, disabled,
}: PropsInputsAddNewProfesor) => {
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
      <div className={getFieldClass(touched, errors, name) + " flex flex-col gap-2 flex-[0_1_15rem]"}>
        <div className="flex flex-col gap-1 w-full">
          <label
            className="w-full font-titleFontLogin text-black/70"
            htmlFor={name}
          >
            {label}
          </label>
          <Field
            className={`w-full border-[#005DD6]/50 focus:border-[#005DD6] font-titleFontLogin  transition shadow-sm  pl-[.8rem] text-[0.9rem] border rounded-md outline-none h-[2.4rem]`}
            {...fieldProps(name)}
            type={type}
            name={name}
            id={name}
            placeholder={textPlaceHolder}
            disabled={disabled}
          />
          <div className="relative">
            {touched[name] && errors[name] && (
              <p className=" text-red-700/90 absolute -top-1 text-start  w-full">
                {errors[name]}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputsAddNewProfesor;
