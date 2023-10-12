import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './product.css';

const ProductCard = ({ setquery ,setprice}) => {
  const [products, setProducts] = useState([]); // State to store the fetched products
  const [isLoading, setIsLoading] = useState(true); // State to track loading state



  useEffect(() => {
    // Simulating a delay of 1 second to show loading state
    const timer = setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setProducts(json); // Update the state with the fetched products
          setIsLoading(false); // Set loading state to false when data is fetched
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
          setIsLoading(false); // Set loading state to false in case of an error
        });
    }, 5);

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts

  }, []);

  const filteredItems = products.filter((item) => {
    // Check if the product matches the category filter
    const matchesCategory =
      !setquery || item.category.toLowerCase().includes(setquery.toLowerCase());

    // If priceRange is provided, apply price filtering logic
    const matchesPrice = !setprice || item.price <= setprice;


    return   matchesCategory && matchesPrice; // Consider both category and price filtering
  });
  return (
    <div className="product-card-container">
      {filteredItems.map(product => (
        <div key={product.id} className="card" style={{ width: '20rem', padding: '20px' }}>
          <Link to={`/description/${product.id}`}>
            <LazyLoadImage
              src={product.image}
              alt={product.title}
              effect="opacity"
              className="card-img-top"
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: {product.price}</p>
            <p className="card-text">Rating: {product.rating.rate}</p>
            {/* <p className="card-text">Rating: {product.category}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
