import {useState} from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemsList from "./components/itemsList";
import {gamesData} from "./Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";


function App() {
  const [games] = useState(gamesData);


  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={ <ItemsList games={games} /> }/>
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
    </div>
  );
}

export default App;
