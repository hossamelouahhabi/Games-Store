import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemsList from "./components/itemsList";
import { gamesData } from "./Data";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { StoreContext } from "./components/context/StoreContext";


function App() {
  const [games] = useState(gamesData);
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)
    if(existingItem){
      setCartItems(cartItems.map((item) => {
        if(item.id === product.id){
          return {...existingItem, quantity: existingItem.quantity + 1}
        }else{
          return item;
        }
      }))
    }else{
      setCartItems([...cartItems,{...product, quantity: 1}])
    }
  }

  const handleRemoveFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)
    if(existingItem.quantity === 1){
      // eslint-disable-next-line
      setCartItems(cartItems.filter((item) => {
        if(item.id  !== product.id) {
          return item
        }
      }))
    }else{
      setCartItems(cartItems.map((item) => {
        if(item.id  === product.id){
          return {...existingItem, quantity: existingItem.quantity - 1}
        }else{
          return item
        }
      }))
    }
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  return (
    <div className="App">
      <StoreContext.Provider value={{handleAddToCart, cartItems, handleRemoveFromCart,handleClearCart}}>
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
