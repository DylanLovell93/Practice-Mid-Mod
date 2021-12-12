import { Component } from 'react';
import './Items.css';
import Item from './Item.js';
import productData from '../data/productData.js';

class Items extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Items">
        <div className="title">
          {' '}
          <h1>My Garage Sale</h1>
        </div>
        {productData.map((product) => {
          return <Item product={product} addToCart={this.props.addToCart} />;
        })}
      </div>
    );
  }
}

export default Items;
