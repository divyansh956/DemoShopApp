import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid function
import NewProduct from './components/NewProduct';
import Products from './components/Products';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Sirf Excel',
      amount: 200,
      date: new Date(2021, 2, 2)
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ]);

  function printProductData(data) {
    console.log("I am inside App.js");
    console.log(data);

    // Generate a unique ID for the new product
    const newProduct = {
      id: uuidv4(), // Generate a unique ID
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };
    console.log(newProduct);

    // Use setProducts to update the state with the new product
    setProducts(prevProducts => [...prevProducts, newProduct]);
  }

  return (
    <div>
      <NewProduct pranay={printProductData} />
      <Products items={products} />
    </div>
  );
}

export default App;
