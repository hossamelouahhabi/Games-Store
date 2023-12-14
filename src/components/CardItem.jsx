import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

export default function CartItem({ item }) {
  const { handleAddToCart, handleRemoveFromCart } = useContext(StoreContext);
  return (
    <div className="container d-flex justify-content-center my-2">
      <div
        className="card mb-3 shadow-sm border-1"
        style={{
          maxWidth: "500px",
          fontSize: "20px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.image}
              alt="..."
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body my-4">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">${item.price} USD</p>
              <small className="text-body-secondary d-flex justify-content-center">
                <button
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                  className="btn btn-outline-success"
                >
                  -
                </button>
                <input
                  style={{
                    maxWidth: `${item.quantity > 9 ? "44px" : "35px"}`,
                  }}
                  className="form-control mx-3"
                  value={item.quantity}
                  readOnly
                />

                <button
                  onClick={() => {
                    handleAddToCart(item);
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
