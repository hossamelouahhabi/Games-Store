import {useState} from "react";
import "./App.css";
import Navbar from "./components/NavBar";
// import Items from './components/items';

import ItemsList from "./components/itemsList";
import {gamesData} from "./Data";

function App() {
  const [games] = useState(gamesData);
  const [cardItems, setCardItems] = useState([]);

  const handleAddToCart = (clickedItem) => {
    setCardItems((smtng) => {
      const isItemInCart = smtng.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return smtng.map((item) =>
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        );
      }

      return [...smtng, {...clickedItem, amount: 1}];
    });
  };

  return (
    <div className="App">
      <Navbar cardItems={cardItems} />
      <ItemsList games={games} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
