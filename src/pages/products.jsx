import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "../../public/images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    name: "Sepatu Baru2",
    price: "Rp 1.500.000",
    image: "../../public/images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    name: "Sepatu Baru3",
    price: "Rp 1.750.000",
    image: "../../public/images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
];
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
     {products.map((product) => (
       <CardProduct key={product.id}>
        <CardProduct.Header image={product.image} />
        <CardProduct.Body title= {product.name}>
          {product.description}
        </CardProduct.Body>
        <CardProduct.Footer price={product.price} />
      </CardProduct>
     ))}
    </div>
  );
};

export default ProductsPage;
