import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/registeration">Register Now</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/student">Students</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default Nav;