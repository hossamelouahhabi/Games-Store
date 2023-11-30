import './App.css';
import Navbar from './components/NavBar';
// import Items from './components/items';
// import { gamesData } from './Data';
import ItemsList from './components/itemsList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemsList/>
    </div>
  );
}

export default App;
