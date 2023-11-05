import React from 'react';
import ProductItem from './ProductItem';
import Card from './Card';
import './Products.css';

const Products = (props) => {

  function clickHandler1() {
    props.count();
  }

  function clickHandler2() {
    props.removeCount();
  }

  return (
    <Card className="products">
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          amount={product.amount}
          date={product.date}
          count={clickHandler1}
          removeCount={clickHandler2}
        />
      ))}
    </Card>
  );
}

export default Products;
