const Button = (props) => {
    const {customize = 'bg-black', children, onClick, type = 'button'} = props;
  return (
    <button onClick= {onClick} type={type} className={`h-10 px-6 font-semibold rounded-md ${customize} text-white cursor-pointer`}>{children}</button>
    );
}

export default Button;