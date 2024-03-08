import { useSelector } from "react-redux";
import CartCard from "./cartCard.component";

const Cart = () => {
  const products = useSelector((state) => state.cartReducer.cartItems);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <CartCard product={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
