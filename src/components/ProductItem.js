import React, { useState } from 'react';
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  function addToCartHandler() {
    props.count();
    setIsAddedToCart(true);
  }

  function removeFromCartHandler() {
    props.removeCount();
    setIsAddedToCart(false);
  }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{props.title}</h2>
        <div className='amount'>Amount : {props.amount}</div>
      </div>
      {isAddedToCart ? (
        <button onClick={removeFromCartHandler}>Remove from Cart</button>
      ) : (
        <button onClick={addToCartHandler}>Add to Cart</button>
      )}
    </Card>
  );
}

export default ProductItem;
