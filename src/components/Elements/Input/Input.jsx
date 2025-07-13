const Input = (props) => {
  const { type = "text", name, placeholder, id, autoComplete} = props;
  return (
    <input
      type={type}
      name={name}
      className="text-sm border border-blue-400 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      id={id}
      autoComplete={autoComplete}
      {...props} // This allows passing additional props like autoComplete
    />
  );
};

export default Input;
