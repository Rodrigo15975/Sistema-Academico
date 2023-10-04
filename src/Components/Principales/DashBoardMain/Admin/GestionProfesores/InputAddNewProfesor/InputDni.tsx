import { Field } from "formik";
import { PropsInputsAddNewProfesor } from "./InterfacesInputs";
const InputDni = ({
  fieldProps,
  touched,
  errors,
  type,
  name,
  className,
  textPlaceHolder,
  label,
  disabled,
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
            className={`w-full border-[#005DD6]/10 focus:border-[#005DD6] focus:shadow-lg focus:scale-105 font-titleFontLogin  transition shadow-sm  pl-[.8rem] text-[0.9rem] border rounded-md outline-none h-[2.5625rem]`}
            {...fieldProps(name)}
            type={type}
            name={name}
            id={name}
            placeholder={textPlaceHolder}
            disabled={disabled}
          />
          {touched[name] && errors[name] && (
            <p className="text-black bg-[#ff4343] border font-titleFontLogin text-center rounded-full">
              {errors[name]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputDni;
