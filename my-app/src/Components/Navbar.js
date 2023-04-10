import { Link } from 'react-router-dom';
// import logo from './logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" /> */}
          <img  alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
          Your Brand Name
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
