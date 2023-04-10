import React from 'react';
// import logo from '../images/logo.png'; // import your logo image

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navyblue">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          
          <img src='https://www.iiit.ac.in/img/iiit-new.png' alt="logo" height="100" className="d-inline-block align-text-top me-2" /> 
          Vivek Mathur, IIIT Hyderabad.
        </a>
        
      </div>
    </nav>
  );
};

export default Header;
