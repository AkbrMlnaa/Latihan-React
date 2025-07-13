const Label = (props) => {
  const { htmlFor = "email", children} = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-600">
      {children}
    </label>
  );
};

export default Label;
