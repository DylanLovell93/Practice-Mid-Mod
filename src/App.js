import './App.css';
import { Component } from 'react';
import Checkout from './components/Checkout.js';
import Cart from './components/Cart.js';
import Items from './components/Items.js';
import productData from './data/productData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (event) => {
    const buttonId = event.target.value;
    const newItem = productData.find((product) => buttonId === product.id);
    console.log(this.state.cart);
    this.setState({
      cart: [...this.state.cart, newItem],
    });
  };

  render() {
    return (
      <div className="App">
        <Items addToCart={this.addToCart} />
        <Cart cart={this.state.cart} />
        <Checkout />
      </div>
    );
  }
}

export default App;
