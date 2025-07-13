import Label from "./Label.jsx";
import Input from "./Input.jsx";

const InputForm = (props) => {
  const { children, name, type, placeholder, ...rest } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{children}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}  // <-- Ini penting untuk kirim autoComplete dan lainnya
      />
    </div>
  );
};

export default InputForm;
