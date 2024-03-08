import { useDispatch } from "react-redux";
import { removeFromCart } from "../slice/cart.slice";

const CartCard = ({product}) => {
    const { title, price, description, image,quantity } = product;
    
    const dispatch = useDispatch();

    const onRemoveClick = (item) =>{
        dispatch(removeFromCart(item))
    }
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src={image} className="w-16 h-16 mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="px-2">Price: ${price*quantity}</div>
      {/* <div>
        <input type="number" value="1" min="1" className="w-16 border border-gray-300 rounded-md p-1 text-center" />
      </div> */}
      <div className="px-2">Quantity:{quantity}</div>
      <div>
        <button onClick={()=>onRemoveClick(product)} className="bg-red-500 text-white px-3 py-1 rounded-md">Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
