import React from 'react';
import ProductItem from './ProductItem';
import Card from './Card';
import './Products.css';

const Products = (props) => {
  return (
    <Card className="products">
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          amount={product.amount}
          date={product.date}
        />
      ))}
    </Card>
  );
}

export default Products;
