import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data || []);

useEffect(() => {
  const sum = cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  setTotalCart(sum);
}, [cart]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-15 bg-blue-950 text-white items-center px-10">
      <p className="text-sm">
        {username ? `Welcome, ${username}` : "You are not logged in"}
      </p>
      <Button
        onClick={handleLogout}
        customize="bg-red-500 ml-4 hover:bg-red-700"
      >
        Logout
      </Button>
      <div className="flex items-center text-white p-2 bg-gray-800 rounded-md ml-5">
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;
