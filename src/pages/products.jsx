import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "../../public/images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Sepatu Baru2",
    price: "Rp 1.500.000",
    image: "../../public/images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Sepatu Baru3",
    price: "Rp 1.750.000",
    image: "../../public/images/shoes.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login"; // Redirect to login page after logout
  } 
  return (
    <>
      <div className="flex justify-end h-15 bg-blue-950 text-white items-center px-10">
        {email ? (
          <p className="text-sm">Welcome, {email}</p>
        ) : (
          <p className="text-sm">You are not logged in</p>
        )}
        <Button onClick={handleLogout} customize="bg-red-500 ml-4 hover:bg-red-700">
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
