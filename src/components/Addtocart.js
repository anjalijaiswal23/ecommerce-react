import React, { useState, useEffect } from 'react';
import './Addtocart.css';
import emptyBasketImage from '../emptybasket.png';

const AddToCart = () => {
  // Retrieve cart items from local storage
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Use useState to manage the updatedCart state
  const [updatedCart, setUpdatedCart] = useState(storedCartItems);

  useEffect(() => {
    // Save the updated cart array to local storage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }, [updatedCart]);

  const handleRemoveItem = (id) => {
    // Filter out the item with the given ID
    const updatedCartAfterRemoval = updatedCart.filter(item => item.id !== id);
    setUpdatedCart(updatedCartAfterRemoval);
  };

  const handleIncrementQuantity = (id) => {
    setUpdatedCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrementQuantity = (id) => {
    setUpdatedCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const calculateTotalSum = () => {
    let sum = 0;
    updatedCart.forEach(item => {
      sum += item.price * item.quantity;
    });
    return Number(sum.toFixed(2));
  };

  const totalSum = calculateTotalSum();

  // Use the updatedCart array to render the items
  return (
    <div className="container">
      <h2 className='mt-4 '>Cart Items</h2>
      {updatedCart.map((item) => (
        <div className="rowcart m-4  cart-box" key={item.id}>
          <div className="col-md-6">
            <div className="cart-img">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
          <div className="col-md-6 text-center m-4 cart-details">
            <p><strong>Product : </strong> {item.title}</p>
            <p><strong>Price:</strong> {item.price * item.quantity} $</p>
            <div className='mt-4'>
              <button onClick={() => handleDecrementQuantity(item.id)} className='btn bg-danger'>-</button>
              <span> {item.quantity} </span>
              <button onClick={() => handleIncrementQuantity(item.id)} className='btn bg-primary '>+</button>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className='btn bg-primary mt-4'>Remove</button>
          </div>
        </div>
      ))}
      <div className="totalsum-box">
        <div>
          {totalSum === 0 ? (
           <>
          <img className='emptybasket' src={emptyBasketImage} alt="Empty Cart" />
           <p className='empty'>Cart is empty</p>
           </>


          ) : (
            <div>
              <p><strong>Total sum:</strong> {totalSum.toFixed(2)} $</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
