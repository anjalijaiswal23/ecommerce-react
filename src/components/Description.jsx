import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './description.css';

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1, // Set the quantity to 1 as we will increment it if the item is already in the cart
      };

      // Retrieve existing cart items from local storage
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      // Check if the item is already present in the cart
      const existingCartItem = existingCartItems.find(
        (cartItem) => cartItem.id === product.id
      );

      if (existingCartItem) {
        // If the item is already in the cart, increment its quantity by 1
        existingCartItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it as a new item with quantity 1
        existingCartItems.push(item);
      }

      // Save the updated cart items to local storage
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    }
  };

  if (!product) {
    return (
      <div className="loading">
        <Skeleton height={200} width={200} />
        <Skeleton count={1} />
      </div>
    );
  }

  return (
    <>
      <div className="description-container m-4 p-4">
        <div className="image-container">
          <LazyLoadImage
            src={product.image}
            alt={product.title}
            className="product-image"
            effect="opacity"
          />
        </div>
        <div className="info-container">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-rating">Rating: {product.rating.rate}</p>
          <p className="product-description">Description: {product.description}</p>
          <div className="order-section">
            <div className="quantity">
              <label htmlFor="quantity">IN STOCK</label>
            </div>
            <div className="subtotal">
              Subtotal: ${product.price}
            </div>

            <div >
            <Link to="/addtocart">
            <button className='add-to-cart' onClick={handleAddToCart}>Add to Cart</button>
            </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
