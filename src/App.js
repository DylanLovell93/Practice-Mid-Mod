import './App.css';
import Checkout from './components/Checkout.js';
import Cart from './components/Cart.js';
import Items from './components/Items.js';

const App = () => {
  return (
    <div className="App">
      <Items />
      <Cart />
      <Checkout />
    </div>
  );
};

export default App;
