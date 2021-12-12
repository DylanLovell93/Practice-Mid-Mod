import { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    return <div className="Cart">Cart</div>;
  }
}

export default Cart;
