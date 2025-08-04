import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RegisterPage from "./pages/register.jsx";
import LoginPage from "./pages/login.jsx";
import Error404 from "./pages/error404.jsx";
import ProductsPage from "./pages/products.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
