import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type = "text", name, placeholder, id, autoComplete} = props;
  return (
    <input
      type={type}
      name={name}
      className="text-sm border border-blue-400 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      id={id}
      autoComplete={autoComplete}
      ref={ref}
      {...props} 
    />
  );
})

export default Input;
