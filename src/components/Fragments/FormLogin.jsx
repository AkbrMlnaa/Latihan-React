import Button from "../Elements/Button/index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    console.log("Login button clicked");
    window.location.href = "/products"; 
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm type="email" name="email" placeholder="Enter Your Email" autoComplete="email">
        Email
      </InputForm>
      <InputForm
        type="password"
        name="password"
        placeholder="********"
        autoComplete="current-password"
      >
        Password
      </InputForm>
      <Button customize="bg-blue-500" type="submit" >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
