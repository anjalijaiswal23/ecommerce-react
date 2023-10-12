import React, { useState } from 'react';
import "./filter.css"

const Filter = ({ handleFilter  , handlePrice }) => {
  const [priceRange, setPriceRange] = useState('');
  const [displayedPrice, setDisplayedPrice] = useState('');

  const handleClick = ( filterValue) => {
    handleFilter(filterValue);
  };
// console.log(priceRange);


  const handlePriceRangeChange = (event) => {
    const { value } = event.target;
    setPriceRange(value);
    setDisplayedPrice(`$0 - $${value}`);
    handlePrice(value);

  };

  return (
    <div className='filter-container mt-4'>
      <div className="left-sidebar">
        <h3>Categories</h3>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter by Category
          </button>
          <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick( "men's clothing")}
              >
                Men's Clothing
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick( 'jewelery')}
              >
                Jewelry
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick( 'electronics')}
              >
                Electronics
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleClick( "women's clothing")}
              >
                Women's Clothing
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-filter">
        <h3>Filters</h3>
        <button onClick={() => handleClick('')} className="btn btn-primary">
          clear
        </button>
        <label htmlFor="customRange1" className="form-label">Price Range: {displayedPrice}</label>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          name="priceRange"
          min="0"
          max="600" // Adjust the maximum value based on your data
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
      </div>
    </div>
  );
};

export default Filter;
