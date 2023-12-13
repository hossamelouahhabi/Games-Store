import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

export default function CartItem({ item }) {
  const { cartItems, handleRemoveFromCart, handleAddToCart } =
    useContext(StoreContext);
  return (
    <div className="container d-flex justify-content-center my-2">
      <div
        class="card mb-3 shadow-sm border-1"
        style={{
          maxWidth: "500px",
          fontSize: "20px",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={item.image} class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8">
            <div class="card-body my-4">
              <h2 class="card-title">{item.name}</h2>
              <p class="card-text">{item.price}</p>
              <small class="text-body-secondary d-flex justify-content-center">
                <button
                  onClick={() => {
                    handleRemoveFromCart(item.id);
                  }}
                  className="btn btn-outline-success"
                >
                  -
                </button>
                <input
                  style={{
                    maxWidth: `${cartItems[item.id] > 9 ? "44px" : "35px"}`,
                  }}
                  className="form-control mx-3"
                  value={cartItems[item.id]}
                />
                <button
                  onClick={() => {
                    handleAddToCart(item.id);
                  }}
                  className="btn btn-outline-success"
                >
                  +
                </button>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
