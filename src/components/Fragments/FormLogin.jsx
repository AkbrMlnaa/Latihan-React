import { useRef } from "react";
import Button from "../Elements/Button/index.jsx";
import InputForm from "../Elements/Input/Index.jsx";
import { useEffect } from "react";
import { login } from "../../services/auth.service.js";
import { useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // console.log("Login button clicked");
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window,location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        name="username"
        placeholder="Enter Your Username"
        autoComplete="username"
        ref={usernameRef}
      >
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
      {loginFailed && (
        <p className="font-semibold text-red-600 text-center">{loginFailed}</p>
      )}
      <Button customize="bg-blue-500" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
