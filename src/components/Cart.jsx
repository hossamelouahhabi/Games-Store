import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import CartItem from "./CardItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, handleClearCart } = useContext(StoreContext);

  const TotalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  if (cartItems.length === 0) {
    return (
      <>
        <h1 className="my-5">cart is empty</h1>
        <Link to="/">
          <button className="btn btn-outline-success">Back To The Shop</button>
        </Link>
      </>
    );
  }

  const CartContent = cartItems.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return (
    <>
      <div className="mt-5">{CartContent}</div>
      {cartItems.length >= 1 && (
        <button
          className="btn btn-outline-danger my-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      <div className="container my-4">
        <h2>Total Price: ${TotalPrice.toFixed(2)} USD</h2>
      </div>
    </>
  );
}
