import { gamesData } from "../Data";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import CartItem from "./CardItem";

export default function Cart() {
  const { cartItems } = useContext(StoreContext);

  const CartContent = gamesData.map((item) => {
    if (0 !== cartItems[item.id]) {
      return <CartItem item={item} />;
    }
  });

  return (
    <>
      <div className="my-5">{CartContent}</div>
    </>
  );
}
