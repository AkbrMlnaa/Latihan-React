import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center bg-white min-h-screen items-center flex-col">
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error404;
