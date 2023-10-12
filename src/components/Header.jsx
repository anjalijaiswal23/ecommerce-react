import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./header.css"




const Header = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { searchItem } = useParams();

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        const results = json.filter(user =>
          user.title.toLowerCase().startsWith(input.toLowerCase())
        );
        setSearchResults(results);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  };

  const handleSearch = (value) => {
    setInput(value);
    if (value.length > 2) {
      fetchData();
    }
    else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchItem) {
      handleSearch(searchItem);
    }
  }, [searchItem]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link to="/">
            <div className="nav-item logo" aria-current="page">Bizbag</div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link to="/">
                  <div className="nav-link active" aria-current="page" href="#">Home</div>
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <Link to="/">
                  <div className="nav-link active" aria-current="page" href="#">Home</div>
                </Link> */}
              </li>
            </ul>
            <form className="d-flex">
              <input
                value={input}
                onChange={(e) => handleSearch(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn " type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
      {input && (

        <div id='onclick-search' className="search-results">
          {searchResults.map(product => (
            <div key={product.id}>
              <Link to={`/description/${product.id}`}>

                <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              </Link>
            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
