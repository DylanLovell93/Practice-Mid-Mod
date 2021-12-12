import { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => {
            return <li>{item.name + ': ' + item.price}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Cart;
