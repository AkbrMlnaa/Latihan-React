import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
   <div className="w-full h-full border-2 bg-white border-blue-400 rounded-lg p-6 shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  )
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-bold tracking-tight text-black">
          {title}
        </h5>
        <p className="text-lg text-black">{children.substring(0, 35)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, onClick, id } = props;
  return (
    <div className="pb-5 flex items-center justify-between">
      <span className="text-xl font-bold text-black">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button customize="bg-blue-600" onClick={() => onClick(id)} >Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
