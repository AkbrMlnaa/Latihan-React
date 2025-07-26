import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { title, text, children, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs border-2 border-blue-400  rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 ">{title}</h1>
        <p className="font-medium text-slate-600 mb-2">{text}</p>
        {children}
        <p className="mt-2">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" ? (
            <Link
              to="/register"
              className="text-sm font-bold text-blue-500 bold hover:text} -blue-700"
            >
              Sign up
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm font-bold text-blue-500 hover:text-blue-700"
            >
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
