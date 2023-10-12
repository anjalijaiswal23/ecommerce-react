import React, { useState } from 'react';
import Filter from './Filter';
import ProductCard from './Productcard';

const Heading = () => {
  const [query, setQuery] = useState('');

  const handleClick = (filterValue) => {
    setQuery(`${filterValue}`);
  };

  const [price, setprice] = useState(0)


  const handleprice = (priceRange) => {
    setprice(priceRange); // Set the price state to the selected price range
  };

  console.log("hi from heading",price)
  return (
    <div className="m-4 text-center">
      <h1>Products Details</h1>

      <div className="container-fluid">
        <div className="row d-flex flex-wrap">
          <div className="col-md-2 col-12">
            <Filter handleFilter={handleClick} handlePrice={handleprice} />
          </div>
          <div className="col-md-9 col-12">
            <ProductCard setquery={query}  setprice={price}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
