import React from 'react';
// import logo from '../images/logo.png'; // import your logo image

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navyblue">
      <div className="container-fluid row">
        <a className="navbar-brand bg-white" href="#">
          
          <img src='https://www.iiit.ac.in/img/iiit-new.png' alt="logo" height="100" className="d-inline-block align-text-top me-2" /> 
          
        </a>
        
        <div className="col-sm-6">
          <h1 className="text-white">CiSTUP Task 4</h1>
        </div>

      </div>
    </nav>
  );
};

export default Header;
