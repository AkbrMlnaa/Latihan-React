import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import useLogin from "../hooks/useLogin";
import Navbar from "../components/Layout/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useLogin()

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <Navbar/>
      {/* Content */}
      <div className="flex justify-center py-5 gap-10">
        {/* Products */}
        <div className="w-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="w-[220px]">
                <CardProduct>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              </div>
            ))}
        </div>

        {/* Cart */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products}/>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
