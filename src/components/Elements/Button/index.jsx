const Button = (props) => {
    const {customize = 'bg-black', children, onClick, type = 'button'} = props;
  return (
    <button onClick= {onClick} type={type} className={`py-2 px-2 font-semibold rounded-md ${customize} text-white cursor-pointer`}>{children}</button>
    );
}

export default Button;