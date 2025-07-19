import Label from "./Label.jsx";
import Input from "./Input.jsx";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { children, name, type, placeholder, ...rest } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{children}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}  
      />
    </div>
  );
})

export default InputForm;
