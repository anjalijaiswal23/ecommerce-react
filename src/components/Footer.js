import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white  text-center py-4">
      <h2>Contact Us</h2>
      <p>
        Have any questions? Feel free to reach out to us!
      </p>
      <div className="social-icons">
        <a href="mailto:anjalijaiswal2952@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fa fa-envelope icon" style={{ color: '#ffffff ', padding: '5px', margin: '5px' }}></i>
        </a>
        <a href="https://www.instagram.com/anjalijaiswal_19/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fa fa-instagram icon" style={{ color: '#ffffff', padding: '5px', margin: '5px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/anjali-jaiswal-3a2780211/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fa fa-linkedin icon" style={{ color: '#ffffff', padding: '5px', margin: '5px' }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
