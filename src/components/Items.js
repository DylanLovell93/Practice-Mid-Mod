import { Component } from 'react';
import './Items.css';
import Item from './Item.js';

class Items extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Items">
        Items
        <Item />
      </div>
    );
  }
}

export default Items;
