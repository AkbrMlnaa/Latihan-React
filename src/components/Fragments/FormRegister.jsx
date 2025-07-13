import Button from "../Elements/Button/index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm type="text" name="fullname" placeholder="Enter Your Full Name">
        Full Name
      </InputForm>
      <InputForm type="email" name="email" placeholder="Enter Your Email">
        Email
      </InputForm>
      <InputForm type="password" name="password" placeholder="********">
        Password
      </InputForm>
      <Button customize="bg-blue-500">Register</Button>
    </form>
  );
};

export default FormRegister;
