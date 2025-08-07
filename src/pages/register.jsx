import FormLogin from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout 
        title="Register"
        text="Please fill in the form to create an account."
        type="register"
    >
    <FormLogin />
    </AuthLayout>
  );
};

export default RegisterPage;