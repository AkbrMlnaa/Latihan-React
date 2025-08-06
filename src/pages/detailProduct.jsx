import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useState } from "react";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg max-w-xl">
      <img
        className="h-48 w-full object-cover object-center"
        src={product?.image}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {product?.title}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {product?.description}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            {product?.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            {(product?.price * 1.2).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
