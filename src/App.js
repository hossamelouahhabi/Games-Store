import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemsList from "./components/itemsList";
import { gamesData } from "./Data";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { StoreContext } from "./components/context/StoreContext";

const defaultCart = () => {
  let cart = {}
  for(let i = 1; i < gamesData.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
}

function App() {
  const [games, setGames] = useState(gamesData);
  const [cartItems, setCartItems] = useState(defaultCart())

  const handleAddToCart = (ID) => {
    setCartItems((prev) => ({...prev, [ID]: prev[ID] + 1}))
  }

  const handleRemoveFromCart = (ID) => {
    setCartItems((prev) => ({...prev, [ID]: prev[ID] - 1}))
  }

  // console.log(cartItems);
  return (
    <div className="App">
      <StoreContext.Provider value={{handleAddToCart, cartItems, handleRemoveFromCart}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemsList games={games} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
