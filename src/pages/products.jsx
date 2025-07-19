import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/produk.service";

const ProductsPage = () => {
  const email = localStorage.getItem("email");

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  // Ambil cart dari localStorage saat pertama kali render
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // Update total harga dan simpan cart ke localStorage
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + (product ? product.price * item.qty : 0);
    }, 0);
    setTotalHarga(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products]);

  // Ambil data produk dari API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // Tambahkan item ke cart
  const handleAddToCart = (id) => {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-end h-15 bg-blue-950 text-white items-center px-10">
        <p className="text-sm">
          {email ? `Welcome, ${email}` : "You are not logged in"}
        </p>
        <Button
          onClick={handleLogout}
          customize="bg-red-500 ml-4 hover:bg-red-700"
        >
          Logout
        </Button>
      </div>

      {/* Content */}
      <div className="flex justify-center py-5 gap-10">
        {/* Products */}
        <div className="w-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="w-[220px]">
                <CardProduct>
                  <CardProduct.Header image={product.image} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    id={product.id}
                    onClick={handleAddToCart}
                  />
                </CardProduct>
              </div>
            ))}
        </div>

        {/* Cart */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="font-semibold text-left">
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  if (!product) return null;
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}

              {/* Total Harga */}
              {cart.length > 0 && (
                <tr>
                  <td>Total Harga</td>
                  <td colSpan={2}></td>
                  <td>
                    {totalHarga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
