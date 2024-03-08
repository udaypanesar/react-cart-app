import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cart.slice";

const ProductCard = ({ product }) => {
    const { title, price, description, image } = product;
    const dispatch = useDispatch()
    
    const onAddToCartClick = () =>{
      const payload = {
        ...product,
        quantity:1
      }
      dispatch(addToCart(payload))
    }
  return (
    <>
      <img src={image} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-800 font-semibold mb-2">${price}</p>
        <button onClick={onAddToCartClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
