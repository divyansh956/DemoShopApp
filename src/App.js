import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid function
import NewProduct from './components/NewProduct';
import Products from './components/Products';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Burger',
      amount: 100,
      date: new Date(2023, 8, 10),
    },
    {
      id: 'p2',
      title: 'Pizza',
      amount: 200,
      date: new Date(2023, 2, 2)
    },
    {
      id: 'p3',
      title: 'Pasta',
      amount: 130,
      date: new Date(2023, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2023, 5, 5),
    },
  ]);

  function printProductData(data) {
    // console.log("I am inside App.js");
    // console.log(data);

    // Generate a unique ID for the new product
    const newProduct = {
      id: uuidv4(), // Generate a unique ID
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };
    // console.log(newProduct);

    // Use setProducts to update the state with the new product
    setProducts(prevProducts => [...prevProducts, newProduct]);
  }

  const [count, setCount] = useState(0);
  function addItem() { setCount(count + 1); }
  function removeItem() { setCount(count - 1); }

  return (
    <div>
      <p className='cart'>Items In Cart: {count}</p>
      <NewProduct pranay={printProductData} />
      <Products items={products} count={addItem} removeCount={removeItem} />
    </div>
  );
}

export default App;
