import { Component } from 'react';
import './Item.css';

// const practiceItem = {
//   id: '36bb1ef5-b3fe-4646-ab48-97716812831d',
//   name: 'Baseball Glove',
//   price: 19.99,
//   description:
//     "This glove has a mark on it that's either a famous player's autograph or a ketchup stain.",
//   img: 'https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove',
// };

class Item extends Component {
  constructor() {
    super();
  }

  render() {
    const { name, price, description, img, id } = this.props.product;
    return (
      <div className="Item">
        <h2>{name}</h2>
        <p>{price}</p>
        <button onClick={this.props.addToCart} value={id}>
          Add to Cart
        </button>
        <br></br>
        <img src={img} />
        <p>{description}</p>
      </div>
    );
  }
}

export default Item;
